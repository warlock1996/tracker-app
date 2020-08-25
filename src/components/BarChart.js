import React from 'react'
import { Bar } from "react-chartjs-2"
import { Skeleton } from '@material-ui/lab'
import { GlobalContext } from "../GlobalContext"

function BarChart () {
    const { state: { stats, country } } = React.useContext(GlobalContext)
    return (
        <> 
        { Object.keys(stats).length ? <Bar
            data= {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            backgroundColor: [
                                  'rgba(75,0,130 , .6)',
                                  'rgba(0,128,0 ,.6 )',
                                  'rgba(255,0,0 ,.6 )'  
                            ],
                            label: 'Current State in '+country,
                            data: [stats.confirmed.value, stats.recovered.value, stats.deaths.value],
                        }
                    ]
                }}
        /> :  <Skeleton animation="wave" width={300} height={400}/>}
        </>    
    )
}

export default BarChart