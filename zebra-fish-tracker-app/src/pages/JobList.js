import React from 'react'
import JobsHeader from '../components/JobsHeader'
import JobTable from '../components/JobTable'
import Navbar from '../components/Navbar'
import UploadJob from '../components/UploadJob'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner'

export default function JobList() {
    const [NumJobs, updateNumJobs] = useState(null);
    const [NumCompletedJobs, updateNumCompletedJobs] = useState(null);
    const [NumPendingJobs, updateNumPendingJobs] = useState(null);
    const [JobsData, updateJobsData] = useState(null);
    let url = "http://127.0.0.1:5000/jobs";
    useEffect(() => {
        async function fetchJobs() {

            await axios.get(url).then(res => {
                let data = res.data;
                console.log("Jobs: ", data)
                let numJobs = data.length, completed = 0, pending = 0;
                for (let i = 0; i < numJobs; ++i) {
                    (data[i].status === "COMPLETED") ? completed++ : pending++;
                }
                updateJobsData(data)
                updateNumJobs(numJobs);
                updateNumCompletedJobs(completed);
                updateNumPendingJobs(pending);
            }
            ).catch(err => {
                console.log("[Error] Error while fetching all jobs", err);
            })
        }
        fetchJobs()
    }, [url])
    return (
        <div>
            <Navbar />
            {
                (JobsData !== null && NumJobs !== null && NumCompletedJobs !== null && NumPendingJobs !== null) ? <>
                    <div className='container mt-5'>
                        <JobsHeader NumJobs={NumJobs} NumCompletedJobs={NumCompletedJobs} NumPendingJobs={NumPendingJobs} />
                    </div>
                    <div className="container mt-5">
                        <UploadJob />
                    </div>
                    <div className='container mt-5'>
                        <JobTable JobsData={JobsData} />
                    </div>
                </> : <Spinner />
            }
        </div>
    )
}
