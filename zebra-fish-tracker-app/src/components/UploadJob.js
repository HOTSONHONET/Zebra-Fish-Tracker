import axios from 'axios';
import React, { useState } from 'react'
import Spinner from '../components/Spinner'

export default function UploadJob() {
    const [fileState, updateFileState] = useState(null);
    const [file_name, update_file_name] = useState('')
    const [showSpinner, update_showSpinner] = useState(false);

    async function uploadFile() {
        let url = "http://127.0.0.1:5000/upload";
        const customHeader = {
            headers: {
                // Authorization: `Bearer ${getLocalStorageToken()}`,
                "Content-Type": 'multipart/form-data',
            },
        };
        if (fileState && file_name !== '') {
            const formData = new FormData();
            formData.append("file", fileState);
            formData.append("filename", file_name)
            update_showSpinner(true);
            await axios.post(url, formData, customHeader).then(res => {
                console.log(res)
            }).catch(err => {
                console.log("[ERROR] Error while uploading the file: ", err)
            });

            window.location.reload();
        }

    }

    return (
        <div>
            <div className="card" style={{ width: "40rem", height: "14rem" }}>
                <div className="card-title mt-4 text-center">
                    {
                        showSpinner ?
                            <div className='row'>
                                <div className="col">
                                    <h3>Upload Job</h3>
                                </div>
                                <div className="col">
                                    <Spinner />
                                </div>
                            </div> : <h3>Upload Job</h3>
                    }
                </div>
                <div className="row px-4">
                    <div className="col-8 text-center" style={{ borderStyle: "dotted", verticalAlign: "center" }}>
                        <form id="form-file-upload">
                            <input
                                type="file"
                                id="input-file-upload"
                                multiple={false}
                                value={file_name}
                                style={{ display: "none" }}
                                onChange={(e) => { updateFileState(e.target.files[0]); update_file_name(e.target.value) }}
                            />
                            <label id="label-file-upload" htmlFor="input-file-upload">
                                <div>
                                    {fileState ? <>
                                        <img src="../assets/svgs/job.svg" className="card-img-top" alt="..." style={{ height: "40px" }} />
                                        <p>click submit to process video</p>
                                    </> : <>
                                        <img src="../assets/svgs/video.svg" className="card-img-top" alt="..." style={{ height: "40px" }} />
                                        <p>Drag and drop your file here or click to upload</p>
                                    </>
                                    }
                                </div>
                            </label>
                        </form>
                    </div>
                    <div className="col-4" style={{ verticalAlign: "center" }}>
                        <div className="card-body">
                            <button className="btn btn-primary" onClick={() => { uploadFile() }}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
