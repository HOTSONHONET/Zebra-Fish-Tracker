import React, { useState } from 'react'

const performanceMetrics = {
    "Confusion Matrix": "../assets/model_info/Performance/confusion_matrix.png",
    "F1 Curve": "../assets/model_info/Performance/F1_curve.png",
    "Labels": "../assets/model_info/Performance/labels.jpg",
    "Labels Correlogram": "../assets/model_info/Performance/labels_correlogram.jpg",
    "Precision vs Confidence": "../assets/model_info/Performance/P_curve.png",
    "Precision vs Recall": "../assets/model_info/Performance/PR_curve.png",
    "Recall vs Confidence": "../assets/model_info/Performance/R_curve.png"
}


export default function PerformanceMetrics(props) {
    const [metric_selected, update_metric_selected] = useState('Confusion Matrix');

    return (
        <div className="card" style={{ width: "100%" }}>
            <div className="card-title mt-4 mx-4">
                <h3>Performance Metrics</h3>
            </div>
            <div className="card-body">
                <div className='row'>
                    <div className="col-4">
                        {Object.keys(performanceMetrics).map((metric, idx) => {
                            return <>
                                <div className="form-check" key={`form_${idx}`}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault"
                                        value={metric}
                                        onChange={(e) => { update_metric_selected(e.target.value) }}
                                        key={`input_${idx}`}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexRadioDefault"
                                        key={`label_${idx}`}
                                    >
                                        {metric}
                                    </label>
                                </div>
                            </>
                        })}
                    </div>
                    <div className="col-8" style={{ maxheight: "50%" }}>
                        <img src={performanceMetrics[metric_selected]} width="100%" height="400px" alt="..." />
                    </div>
                </div>
            </div>

        </div>
    )
}
