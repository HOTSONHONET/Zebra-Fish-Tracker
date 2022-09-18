import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function JobTable(props) {
    const [index, updateIndex] = useState(0);

    let maxxIndex = Math.floor(props.JobsData.length / 10) * 10;
    let minnIndex = 0;

    return (
        <div>
            <div className="card bg-light" style={{ width: "100%", height: `${props.JobsData.slice(index, index + 10).length === 10 ? "35rem" : `${14 + (props.JobsData.slice(index, index + 10).length) * 2}rem`}` }}>
                <div className="card-title mt-4 text-center fw-bolder">
                    <h3>Jobs</h3>
                </div>
                <div className="card-body text-center ">
                    <div className="container text-center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Index</th>
                                    <th scope="col">Job Id</th>
                                    <th scope="col">File</th>
                                    <th scope="col">Submission date</th>
                                    <th scope="col">Completion date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.JobsData.slice(index, index + 10).map((data, idx) => {
                                        console.log("index: ", index)
                                        return <tr key={`th-${idx}`}>
                                            <th scope="row">{index + idx + 1}</th>
                                            <td>{data.status ? <Link style={{ textDecoration: "none" }} to={`/jobs/${data.job_id}`}>{data.job_id}</Link> : data.job_id}</td>
                                            <td>{data.file_name}</td>
                                            <td>{data.submitted_date}</td>
                                            <td>{data.completion_date}</td>
                                            <td>{data.status}</td>
                                            <td>{data.status === "COMPLETED" ? "csv" : "-"}</td>
                                        </tr>
                                    })
                                }

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>
            <div className="container mt-4 mb-4 d-flex justify-content-center">
                <button type="button" class="btn btn-primary mx-1" disabled={index === minnIndex} onClick={() => { updateIndex(Math.max(minnIndex, index - 10)) }}>Previous</button>
                <button type="button" class="btn btn-primary mx-1" disabled={index === maxxIndex || index + 10 === maxxIndex} onClick={() => { updateIndex(Math.min(index + 10, maxxIndex)) }}>Next</button>
            </div>
        </div >
    )
}
