import React, { useState } from 'react'
import PathGraph from './PathGraph';
import FishAttribute from './FishAttribute';


const dimensions = ['2D', '3D'];

export default function GraphAttributes(props) {
    let fishes = props.fishes, attributes = props.attributes;

    const [fish, setFish] = useState('Fish_1');
    const [dimension, setDimension] = useState('2D');
    return (
        <div>
            <div className="card mb-3" style={{ width: "100%", height: "600px" }}>
                <div className="card-title p-2">
                    <h3>Fish Attributes</h3>
                </div>
                <div className="card-body text-center fw-bolder">
                    <div className="row pt-2">
                        <div className='col-2'>
                            <div className="row" style={{ width: "30px" }}>
                                <div className="btn-group">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {fish === "" ? "Select Fish" : fish}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {fishes.map((fish_name, idx) => {
                                            return <>
                                                <li value={fish_name} onClick={(e) => { setFish(e.target.textContent) }}><p className="dropdown-item">{fish_name}</p></li>
                                                <li><hr className="dropdown-divider" /></li>
                                            </>
                                        })}

                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-2" style={{ width: "20px" }}>
                                {dimensions.map((dimension_, idx) => {
                                    return <div className="col">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault"
                                                value={dimension_}
                                                onChange={(e) => { setDimension(e.target.value) }}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault"
                                            >
                                                {dimension_}
                                            </label>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="col-6" height="500px">
                            <PathGraph fish={fish} dimension={dimension} attributes={attributes} />
                        </div>
                        <div className="col-4 mt-0">
                            <FishAttribute fish={fish} attributes={attributes} job_id={props.job_id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
