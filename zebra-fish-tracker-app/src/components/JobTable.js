import React from 'react'
import { Link } from 'react-router-dom';

export default function JobTable() {
    const dummyData = [
        { job_id: "asnkdlsan", submission_date: "10 Sept 2022", completion_date: "10 Sept 2022", status: true },
        { job_id: "halssaasd", submission_date: "10 Sept 2022", completion_date: "10 Sept 2022", status: false },
    ];
    return (
        <div>
            <div className="card bg-light" style={{ width: "100%", height: "14rem" }}>
                <div className="card-title mt-4 text-center fw-bolder">
                    <h3>Jobs</h3>
                </div>
                <div className="card-body text-center">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Job Id</th>
                                <th scope="col">Submission date</th>
                                <th scope="col">Completion date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dummyData.map((data, idx) => {
                                    return <tr>
                                        <th scope="row">{idx + 1}</th>
                                        <td>{data.status ? <Link style={{ textDecoration: "none" }} to={`/jobs/${data.job_id}`}>{data.job_id}</Link> : data.job_id}</td>
                                        <td>{data.submission_date}</td>
                                        <td>{data.completion_date}</td>
                                        <td>{data.status ? "Completed" : "Processing"}</td>
                                        <td>{data.status ? "csv" : "-"}</td>
                                    </tr>
                                })
                            }

                        </tbody>

                    </table>
                    <div className="container">
                        <nav aria-label="..." >
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </div>
    )
}
