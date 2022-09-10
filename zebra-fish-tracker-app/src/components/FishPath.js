import React, { useState } from 'react'
import PathGraph from './PathGraph';

const fishes = [
    'fish 1',
    'fish 2',
    'fish 3',
    'fish 4',
    'fish 5',
]

const dimensions = ['2D', '3D'];

export default function FishPath() {
    const [fish, setFish] = useState('fish_1');
    const [dimension, setDimension] = useState('2D');
    return (
        <div>
            <div className="card mb-3" style={{ width: "100%", height: "500px" }}>
                <div className="card-title p-2">
                    <h3>Fish Path</h3>
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
                        <div className="col-10" height="500px">
                            <PathGraph fish={fish} dimension={dimension} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
