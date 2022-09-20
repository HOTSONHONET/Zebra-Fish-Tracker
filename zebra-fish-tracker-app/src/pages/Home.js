import React from 'react'
import Navbar from '../components/Navbar'
import SlideImages from '../components/SlideImages'
import { HomePageCarouselImages } from '../utils/images.js'

export default function Home() {

    return (
        <div>
            <Navbar />
            <div className="container my-3 mx-auto" style={{ height: "40%" }}>
                <SlideImages images={HomePageCarouselImages} height="600px" />
            </div>

            <div className="container my-30 mb-2 text-center" style={{ borderStyle: "dashed" }}>
                <h2>About</h2>
                <p><strong>ShatZ</strong> is a software for tracking Zebrafish. It is based on YOLO which is a state-of-the-art, real-time object detection algorithm. The user can simply drag and drop a video file in the upload box. The software takes in the video input, processes it, identifies the zebrafish in each frame, gives each of them a unique ID, and stores their coordinates. The coordinates are then used to generate a list of parameters relevant to the behavior of Zebrafish. It also generates a 3-D as well as 2-D track-plot for the movement of the fish. Overall, it gives you a dashboard to efficiently track zebrafish behavior.</p>
            </div>
        </div>
    )
}
