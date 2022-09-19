import React from 'react'


export default function VideoPlayer(props) {
    let video = require(`../Outputs/${props.project_name}/exp/output.mp4`);
    return (
        <div>
            <div className="card" style={{ width: "120vh", height: "60vh" }}>
                <div className="card-title p-4">
                    <h3>Video</h3>
                </div>
                <div className="card-body text-center fw-bolder ">
                    <video
                        width="100%"
                        height="250vh"
                        preload="auto"
                        // className="video-js vjs-big-play-centered"
                        data-setup={{
                            fluid: true
                        }}
                        id="my-video"
                        controls
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}
