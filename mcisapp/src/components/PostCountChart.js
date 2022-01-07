import React from 'react'
import { useState, useEffect } from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import { csv } from 'd3';
import url from '../post_count.csv';

//converting string row to numbers
const row = d => {
    d.POST_COUNT = +d.POST_COUNT;
    return d;
}

const PostCountChart = () => {
// UseState Hook & useEffect Hook
    const [data, setData] = useState([]);

    //This useEffect function runs once
    useEffect(() => {
        csv(url, row).then(data => {
            setData(data)
        })
    }, [])

    return (
        <div style={{ margin: "2rem", backgroundColor: "white" }}>
            <h4 style={{ color: "black" }}>POST COUNT</h4>

            <VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                // domainPadding will add space to each side of VictoryBar to
                // prevent it from overlapping the axis
                domainPadding={{ x: 100, y: 40 }}
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}>

                <VictoryBar
                    data={data}
                    style={{ data: { fill: "#3a9fbf" } }}
                    x="TAGS"
                    y="POST_COUNT"
                    cornerRadius={3}
                    barRatio={1.1}
                />

            </VictoryChart>

        </div>

    );
}


export default PostCountChart