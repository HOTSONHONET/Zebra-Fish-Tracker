import React from 'react'
import Plot from 'react-plotly.js';


const render3DGraph = (fish_name, x, y) => {
    let z = [];
    for (let i = 0; i < x.length; i++) {
        z.push(i + 1);
    }
    return <>
        <Plot
            data={[
                {
                    x: x,
                    y: y,
                    z: z,
                    type: 'scatter3d',
                    mode: 'lines+markers',
                    marker: {
                        color: 'rgb(255, 153, 51)',
                        opacity: 0.8
                    },
                    plot_bgcolor: "#e0ebeb"
                },
            ]}
            layout={{
                width: "500",
                height: "350",
                title: `Showing plot for ${fish_name}`,
                margin: {
                    l: 0,
                    r: 0,
                    b: 0,
                    t: 60
                },
                plot_bgcolor: "#e0ebeb"
            }}
        />
    </>;
}

const render2DGraph = (fish_name, x, y) => {
    return <>
        <Plot
            data={[
                {
                    x: x,
                    y: y,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'red' },
                },
            ]}
            layout={{
                width: "500",
                height: "350",
                title: `Showing plot for ${fish_name}`,
                plot_bgcolor: "#e0ebeb",
                xaxis: { zeroline: false, title: 'X' },
                yaxis: { zeroline: false, title: 'Y' }
            }}
        />
    </>
}

export default function PathGraph(props) {
    let attributes = props.attributes;
    console.log("attributes: ", attributes);
    let x = [], y = [];
    x = attributes[props.fish]["x"];
    y = attributes[props.fish]["y"];
    console.log(x, y);
    return (
        <div className="container" style={{ borderStyle: "dashed", height: "450px" }}>
            {
                props.dimension === '2D' ? render2DGraph(props.fish, x, y) : render3DGraph(props.fish, x, y)
            }
        </div>
    )
}
