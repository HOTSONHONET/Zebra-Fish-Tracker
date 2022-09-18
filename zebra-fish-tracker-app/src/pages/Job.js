import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import FishIds from '../components/FishIds'
import GraphAttributes from '../components/GraphAttributes'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import VideoPlayer from '../components/VideoPlayer'


export default function Job() {
    const job_id = window.location.href.split("/").pop();

    const [jobDetails, update_jobDetails] = useState(null);
    const [attributes, updateAttributes] = useState(null);
    const [fishes, updateFishes] = useState(null);

    useEffect(() => {

        const getJobDetails = async () => {
            await axios.get(`http://127.0.0.1:5000/jobs/${job_id}`).then((res) => {
                console.log("[INFO] Job Details: ", res.data);
                update_jobDetails(res.data)
            }).catch(err => {
                console.log("[ERROR] Error occurred while fetching job details: ", err)
            });
        }


        const getJobResults = async () => {
            await axios.get(`http://127.0.0.1:5000/results/${job_id}`).then(res => {
                let data = res.data;
                console.log("[INFO] Job Results: ", data);
                updateAttributes(data.attributes);
                updateFishes(Object.keys(data.attributes));
            }).catch(err => {
                console.log("[ERROR] Error occurred while fetching job results: ", err)
            });
        }

        getJobDetails();
        getJobResults();

    }, [])



    return (
        <div>
            <Navbar />
            {
                (jobDetails && attributes && fishes) ? <>
                    <div className="container mx-auto my-4 text-center" style={{ borderStyle: "dashed" }}>
                        <div className="row">
                            <div className="col">
                                <div className="row"><h5>Job Id</h5></div>
                                <div className="row"><p className="fs-6">{jobDetails.job_id}</p></div>
                            </div>
                            <div className="col">
                                <div className="row"><h5>File name</h5></div>
                                <div className="row"><p className="fs-6">{jobDetails.file_name}</p></div>
                            </div>
                            <div className="col">
                                <div className="row"><h5>Submitted on</h5></div>
                                <div className="row"><p className="fs-6">{jobDetails.submitted_date}</p></div>
                            </div>
                            <div className="col">
                                <div className="row"><h5>Completed on</h5></div>
                                <div className="row"><p className="fs-6">{jobDetails.completion_date}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid mt-4'>
                        <div className="row">
                            <div className="col-8" style={{ height: "400px" }}>
                                <VideoPlayer />
                            </div>
                            <div className="col-4" style={{ height: "400px" }}>
                                <FishIds />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <GraphAttributes fishes={fishes} attributes={attributes} />
                    </div>
                </> :
                    <Spinner />
            }

        </div>
    )
}
