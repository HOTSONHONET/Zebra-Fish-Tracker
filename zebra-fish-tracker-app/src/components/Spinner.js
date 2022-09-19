import React from 'react'
import Loading from "./loading.gif"

export default function Spinner() {
    return (
        <div className="container text-center" style={{ width: "100%", height: "100px" }}>
            <img src={Loading} alt="...Loading" />
            <p>Waiting...</p>
        </div>
    )
}
