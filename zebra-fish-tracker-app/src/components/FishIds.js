import React from 'react'
import { useState } from 'react'
import { Carousel } from 'react-bootstrap';

export default function (props) {
    const [fish, update_fish] = useState("Fish_1");
    const fishes = Object.keys(props.images_names);
    console.log("fishes: ", fishes);
    const fish_paths = [
        // require("../Outputs/test/exp/crops/Zebrafish/1/test.jpg"),
        // require("../Outputs/test/exp/crops/Zebrafish/1/test2.jpg"),
        // require("../Outputs/test/exp/crops/Zebrafish/1/test3.jpg"),
        // require("../Outputs/test/exp/crops/Zebrafish/1/test4.jpg"),
        // require("../Outputs/test/exp/crops/Zebrafish/1/test5.jpg"),
    ]
    return (
        <div>
            <div className="card" style={{ width: "83vh", height: "60vh" }}>
                <div className="card-title p-4">
                    <h3>Fish Identified</h3>
                    <div className="btn-group">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {fish === "" ? "Select Fish" : fish}
                        </button>
                        <ul className="dropdown-menu">
                            {fishes.map((fish_name, idx) => {
                                return <>
                                    <li value={fish_name} onClick={(e) => { update_fish(e.target.textContent) }}><p className="dropdown-item">{fish_name}</p></li>
                                    <li><hr className="dropdown-divider" /></li>
                                </>
                            })}

                        </ul>
                    </div>
                </div>
                <div className="card-body text-center">
                    <Carousel style={{ borderRadius: "7px" }}>
                        {
                            props.images_names[fish].map((image_name, idx) => {
                                let fish_no = fish.split("_")[1]
                                let image = require(`../Outputs/${props.project_name}/exp/crops/Zebrafish/${fish_no}/${image_name}`);
                                return <Carousel.Item key={idx} interval={3000}>
                                    <img
                                        src={image}
                                        className="d-block w-100"
                                        alt={`image #${idx}`}
                                        height="200vh"
                                        key={image_name}
                                    />
                                    <Carousel.Caption style={{ textColor: "blue" }} >
                                        <h3>{props?.captionHeader}</h3>
                                        <p>{props?.captionText}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
