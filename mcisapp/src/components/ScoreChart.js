import React from 'react'
import { useState, useEffect } from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import { csv } from 'd3';
import url from '../score.csv';

//converting string row to numbers
const row = d => {
    d.AVG_SCORE = +d.AVG_SCORE;
    return d;
}

const ScoreChart = () => {
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
            <h4 style={{ color: "black" }}>SCORE (VOTES)</h4>

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
                    x="TAGS"
                    y="AVG_SCORE"
                    cornerRadius={3}
                    barRatio={1.1}

                />

            </VictoryChart>

        </div>

    );
}


export default ScoreChart