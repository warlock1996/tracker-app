import React from 'react'
import Countup from 'react-countup'
import { Card, CardContent, Typography } from '@material-ui/core'

function StatsCard (props) {
    return (
        <Card className={props.title}>
            <CardContent>
                <Typography variant="h5"  gutterBottom>{props.title}</Typography>
                    <Typography variant="body1" gutterBottom>
                        <Countup end={props.data} duration={1} separator=","/>
                    </Typography>
                <Typography variant="body2" gutterBottom>{props.desc}</Typography>
            </CardContent>
        </Card>
    )
}

export default StatsCard;