import React from 'react'
import { Line } from "react-chartjs-2"
import { Skeleton } from '@material-ui/lab'
import { GlobalContext } from "../GlobalContext"

function LineChart () {
    const { state: { daily } } = React.useContext(GlobalContext)
    return (
        <> 
        { daily.length ? <Line
            data= {{
                    labels: daily.map(d => d.reportDate),
                    datasets: [
                        {
                            data: daily.map(d => d.confirmed.total),
                            label: "Infected",
                            borderColor: 'indigo',
                            fill: true
                        },
                        {
                            data: daily.map(d => d.deaths.total),
                            label: "Deaths",
                            borderColor: 'transparent',
                            backgroundColor: 'red',
                            fill: true
                        }
                    ]
                }}
        /> :  <Skeleton animation="wave" width={600} height={500}/>}
        </>    
    )
}

export default LineChart