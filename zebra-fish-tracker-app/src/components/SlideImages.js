import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function SlideImages(props) {

    return (

        <Carousel style={{ borderRadius: "7px" }}>
            {
                props.images.map((image, idx) => {
                    return <Carousel.Item key={idx} interval={3000}>
                        <img
                            src={image}
                            className="d-block w-100"
                            alt={`image #${idx}`}
                            height={props?.height}
                        />
                        <Carousel.Caption style={{ textColor: "blue" }} >
                            <h3>{props?.captionHeader}</h3>
                            <p>{props?.captionText}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })
            }
        </Carousel>
    )
}
