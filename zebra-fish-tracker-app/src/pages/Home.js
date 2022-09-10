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

            <div className="container mt-10 text-center">
                <h2>About</h2>
                <p>bla bla</p>
            </div>
        </div>
    )
}
