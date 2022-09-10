import React from 'react'



export default function TrainingCurves() {
    return (
        <div className="card" style={{ width: "100%" }}>
            <div className="card-title mt-4 mx-4">
                <h3>Training Curves</h3>
            </div>
            <div className="card-body">
                <div className="container" style={{ maxheight: "50%" }}>
                    <img src="../assets/model_info/results.png" width="100%" height="400px" alt="..." />
                </div>
            </div>

        </div>
    )
}
