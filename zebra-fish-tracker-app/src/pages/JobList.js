import React from 'react'
import JobsHeader from '../components/JobsHeader'
import JobTable from '../components/JobTable'
import Navbar from '../components/Navbar'
import UploadJob from '../components/UploadJob'

export default function JobList() {
    return (
        <div>
            <Navbar />
            <div className='container mt-5'>
                <JobsHeader />
            </div>
            <div className="container mt-5">
                <UploadJob />
            </div>
            <div className='container mt-5'>
                <JobTable />
            </div>
        </div>
    )
}
