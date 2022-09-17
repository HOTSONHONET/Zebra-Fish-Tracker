import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import FishIds from '../components/FishIds'
import GraphAttributes from '../components/GraphAttributes'
import Navbar from '../components/Navbar'
import VideoPlayer from '../components/VideoPlayer'

export default function Job() {
    const job_id = window.location.href.split("/").pop();
    const [jobDetails, update_jobDetails] = useState({});
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/jobs/${job_id}`).then((res) => {
            // console.log(res.data);
            update_jobDetails(res.data)
        })
    }, [])
    return (
        <div>
            <Navbar />
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
                <GraphAttributes />
            </div>
        </div>
    )
}
