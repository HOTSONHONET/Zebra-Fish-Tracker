import React, { useState } from 'react'

export default function UploadJob() {
    const [fileState, updateFileState] = useState('');
    return (
        <div>
            <div className="card" style={{ width: "40rem", height: "14rem" }}>
                <div className="card-title mt-4 text-center">
                    <h3>Upload Job</h3>
                </div>
                <div className="row px-4">
                    <div className="col-8 text-center" style={{ borderStyle: "dotted", verticalAlign: "center" }}>
                        <form id="form-file-upload">
                            <input
                                type="file"
                                id="input-file-upload"
                                multiple={false}
                                value={fileState}
                                style={{ display: "none" }}
                                onChange={(e) => { updateFileState(e.target.value) }}
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
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
