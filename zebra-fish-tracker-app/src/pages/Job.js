import React from 'react'
import FishAttribute from '../components/FishAttribute'
import FishIds from '../components/FishIds'
import FishPath from '../components/FishPath'
import Navbar from '../components/Navbar'
import Video from '../components/Video'

export default function Job() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid mt-4'>
                <div className="row">
                    <div className="col-8" style={{ height: "400px" }}>
                        <Video />
                    </div>
                    <div className="col-4" style={{ height: "400px" }}>
                        <FishIds />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row " style={{ width: "100%", height: "500px" }}>
                    <div className="col-9">
                        <FishPath />
                    </div>
                    <div className="col-3">
                        <FishAttribute />
                    </div>
                </div>
            </div>
        </div>
    )
}
