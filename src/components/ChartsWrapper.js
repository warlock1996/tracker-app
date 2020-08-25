import React from 'react'
import LineChart from "./LineChart"
import BarChart from "./BarChart"
import { GlobalContext } from "../GlobalContext"

function ChartsWrapper () {
    const {state: { country }} = React.useContext(GlobalContext)
    return (
        <div className="chartsWrapper">
        { country === "Global" ? <LineChart></LineChart> : <BarChart></BarChart> }
        </div>
    )
}

export default ChartsWrapper