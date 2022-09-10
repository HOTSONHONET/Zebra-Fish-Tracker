import React from 'react'


const attributeNames = {
    "Total distance traveled(m)": 0.0,
    "Average speed(m/s)": 0.0,
    "Maximum speed(m/s)": 0.0,
    "Total time mobile(s)": 0.0,
    "Total time stationary(s)": 0.0,
    "Number of freezing episodes": 0.0,
    "Total time in the upper zone(upper half of tank)": 0.0,
    "Total time in the lower zone(lower half of tank)": 0.0
}

export default function FishAttribute() {
    return (
        <div>
            <div className="card mb-3" style={{ width: "100%", height: "500px" }}>
                <div className="card-title p-2 text-center">
                    <h3>Fish Attributes</h3>
                </div>
                <div className="card-body text-center">
                    <table className="table table-sm table-bordered table-hover table-secondary vw-10">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(attributeNames).map((attribute_name, idx) => {
                                    return <>
                                        <tr className="table-light" key={idx}>
                                            <td>{attribute_name}</td>
                                            <td>{attributeNames[attribute_name]}</td>
                                        </tr>
                                    </>
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}
