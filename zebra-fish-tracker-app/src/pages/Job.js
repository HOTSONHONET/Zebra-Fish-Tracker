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
    const [project_name, update_project_name] = useState(null);
    const [images_names, update_images_names] = useState(null);

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
                update_project_name(data.project_name);
                update_images_names(data.images_names);
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
                            <div className="col-5">
                                <VideoPlayer project_name={project_name} />
                            </div>
                            <div className="col-2"></div>
                            <div className="col-5">
                                <FishIds project_name={project_name} images_names={images_names} />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-2">
                        <GraphAttributes fishes={fishes} attributes={attributes} job_id={job_id} />
                    </div>
                </> :
                    <Spinner />
            }

        </div>
    )
}
