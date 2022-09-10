import React from 'react'

export default function () {
    const fish_paths = [
        "../assets/images/dummyFish.jpeg",
        "../assets/images/dummyFish.jpeg",
        "../assets/images/dummyFish.jpeg",
        "../assets/images/dummyFish.jpeg",
        "../assets/images/dummyFish.jpeg",
    ]
    return (
        <div>
            <div className="card" style={{ width: "90%", height: "100%" }}>
                <div className="card-title p-4">
                    <h3>Fish Identified</h3>
                </div>
                <div className="card-body text-center">
                    {fish_paths.map((fish_path, idx) => {
                        return <div className="row mt-1 mx-3" style={{ width: "70%" }}>
                            <div className="col">
                                <img
                                    src={fish_path}
                                    className="card-img-top"
                                    alt="..."
                                    style={{ width: "80px", height: "40px" }} />
                            </div>
                            <div className="col align-middle">
                                <p>{`Fish ${idx + 1}`}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
