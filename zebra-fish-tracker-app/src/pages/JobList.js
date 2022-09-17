import React from 'react'
import JobsHeader from '../components/JobsHeader'
import JobTable from '../components/JobTable'
import Navbar from '../components/Navbar'
import UploadJob from '../components/UploadJob'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function JobList() {
    const [NumJobs, updateNumJobs] = useState(0);
    const [NumCompletedJobs, updateNumCompletedJobs] = useState(0);
    const [NumPendingJobs, updateNumPendingJobs] = useState(0);
    const [JobsData, updateJobsData] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:5000/jobs").then((res) => {
            // console.log(res.data)
            updateJobsData(res.data)
            let numJobs = res.data.length, completed = 0, pending = 0;
            for (let i = 0; i < numJobs; ++i) {
                if (res.data[i].status === "COMPLETED") {
                    completed++;
                } else pending++;
            }

            updateNumJobs(numJobs);
            updateNumCompletedJobs(completed);
            updateNumPendingJobs(pending);
        })
    }, [])
    return (
        <div>
            <Navbar />
            <div className='container mt-5'>
                <JobsHeader NumJobs={NumJobs} NumCompletedJobs={NumCompletedJobs} NumPendingJobs={NumPendingJobs} />
            </div>
            <div className="container mt-5">
                <UploadJob />
            </div>
            <div className='container mt-5'>
                <JobTable JobsData={JobsData} />
            </div>
        </div>
    )
}
