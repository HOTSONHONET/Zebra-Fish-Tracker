import React from 'react'
// import { ReactComponent as Job } from '../svgs/job.svg';
// import { ReactComponent as Processing } from '../svgs/loading.svg';
// import { ReactComponent as Completed } from '../svgs/completed.svg';


export default function JobsHeader(props) {
    return (
        <div className='row'>
            <div className="col">
                <div className="card" style={{ width: "18rem", backgroundColor: "#e0e0eb" }}>
                    <div className="row">
                        <div className="col mt-3">
                            <img src="../assets/svgs/job.svg" className="card-img-top" alt="..." style={{ height: "40px" }} />
                        </div>
                        <div className="col">
                            <div className="card-body text-center fw-bolder">
                                <h5 className="card-title">{props.NumJobs}</h5>
                                <p className="card-text">No. of Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{ width: "18rem", backgroundColor: "#ccffdd" }}>

                    <div className="row">
                        <div className="col mt-3">
                            <img src="../assets/svgs/completed.svg" className="card-img-top" alt="..." style={{ height: "40px" }} />
                        </div>
                        <div className="col">
                            <div className="card-body text-center fw-bolder">
                                <h5 className="card-title">{props.NumCompletedJobs}</h5>
                                <p className="card-text">Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{ width: "18rem", backgroundColor: "#f5f5f0" }}>

                    <div className="row">
                        <div className="col mt-3">
                            <img src="../assets/svgs/loading.svg" className="card-img-top" alt="..." style={{ height: "40px" }} />
                        </div>
                        <div className="col">
                            <div className="card-body text-center fw-bolder">
                                <h5 className="card-title">{props.NumPendingJobs}</h5>
                                <p className="card-text">Processing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
