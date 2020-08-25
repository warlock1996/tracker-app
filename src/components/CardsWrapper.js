import React from 'react'
import { Grid } from '@material-ui/core'
import StatsCard from "./StatsCard"
import { Skeleton } from '@material-ui/lab'
import { GlobalContext } from "../GlobalContext"

function CardsWrapper ({ data }) {
    const { state } = React.useContext(GlobalContext)
    return (
        <Grid container justify="center" spacing={6}>
            <Grid item>
               { state.stats.confirmed ? <StatsCard title="Confirmed" data={state.stats.confirmed.value} desc="Number of confirmed covid cases"></StatsCard> : <Skeleton animation="wave" width={300} height={200}/>} 
            </Grid>
            <Grid item>
               {state.stats.recovered ? <StatsCard title="Recovered" data= {state.stats.recovered.value} desc="Number of covid recoveries"></StatsCard> : <Skeleton animation="wave" width={300} height={200}/>}
            </Grid>
            <Grid item>
               { state.stats.deaths ? <StatsCard title="Deaths" data= {state.stats.deaths.value} desc="Number of deaths caused by covid"></StatsCard>: <Skeleton animation="wave" width={300} height={200}/>}
            </Grid>
        </Grid>
    )
}

export default CardsWrapper;