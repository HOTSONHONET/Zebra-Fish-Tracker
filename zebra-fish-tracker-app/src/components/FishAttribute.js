import React from 'react'

export default function FishAttribute(props) {
    let { fish, attributes } = props;
    console.log(attributes[fish]);
    const attributeNames = {
        "Total distance traveled(m)": attributes[fish]["total_distance"],
        "Average speed(m/s)": attributes[fish]["average_speed"],
        "Maximum speed(m/s)": attributes[fish]["maximum_speed"],
        "Total time mobile(s)": attributes[fish]["total_mobile_time"],
        "Total time stationary(s)": attributes[fish]["total_stationary_time"],
        "Number of freezing episodes": attributes[fish]["no_of_freezing_episodes"],
        "Total time in the upper zone(upper half of tank)": attributes[fish]["total_time_in_upperHalf"],
        "Total time in the lower zone(lower half of tank)": attributes[fish]["total_time_in_lowerHalf"]
    }
    return (
        <div>
            <div className="card mb-3 mt-0" style={{ width: "100%", height: "450px" }}>
                <div className="card-title p-2 text-center">
                    <h3>Attributes</h3>
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
                                        <tr className="table-light" key={`unique_${idx}`}>
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
