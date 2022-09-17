import React from 'react'
import Plot from 'react-plotly.js';


const render3DGraph = (fish_name) => {
    return <>
        <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    z: [2, 6, 3],
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

const render2DGraph = (fish_name) => {
    return <>
        <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
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
    return (
        <div className="container" style={{ borderStyle: "dashed", height: "450px" }}>
            {
                props.dimension === '2D' ? render2DGraph(props.fish) : render3DGraph(props.fish)
            }
        </div>
    )
}
