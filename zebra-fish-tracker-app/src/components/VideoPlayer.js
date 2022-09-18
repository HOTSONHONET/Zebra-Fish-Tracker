import React from 'react'
import video from "../dummyVideo/output.mp4";


export default function VideoPlayer() {
    let video_path = "../dummyVideo/output.mp4";

    return (
        <div>
            <div className="card" style={{ width: "100%", height: "350px" }}>
                <div className="card-title p-4">
                    <h3>Video</h3>
                </div>
                <div className="card-body text-center fw-bolder ">
                    <video
                        width="800px"
                        height="200px"
                        preload="auto"
                        className="video-js vjs-big-play-centered"
                        data-setup="{}"
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
