import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import '../Cards/Cards.module.css';
import CountUp from 'react-countup';

const Cards = (props) => {
    //    if(!props){
    //        return 'Loading....';
    //    }
    //    console.log(props);
    return (
        <div className="container">
            <Grid container spacing={4} justify="center">

                <Grid item component={Card} xs={12} md={2} className="card confirmed">
                    <CardContent >
                        <Typography className="fontType" color="textSecondary" gutterBottom>Confirmed</Typography>
                        {/* <Typography variant="h5">
        <CountUp  className="fontType" start={0} end={Number(props.data.dailyConfirmed)} duration={1} separator="," />
        </Typography> */}
                        <Typography className="fontType newCasesFont" color="textSecondary"><span class="material-icons plus-icon"> add </span>{props.data.dailyConfirmed}</Typography>

                        <Typography className="fontType" color="textSecondary">{props.data.totalConfirmed}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className="card active">
                    <CardContent >
                        <Typography className="fontType" color="textSecondary" gutterBottom>Active</Typography>
                        {/* <Typography variant="h5">
            <CountUp  className="fontType" start={0} end={Number(props.data.dailyActive)} duration={1.5} separator="," />
        </Typography> */}
                        <Typography className="fontType newCasesFont" color="textSecondary"><span class="material-icons plus-icon"> add </span>{props.data.dailyActive}</Typography>

                        <Typography className="fontType" color="textSecondary">{props.data.totalActive}</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={2} className="card recovered">
                    <CardContent>
                        <Typography className="fontType" color="textSecondary" gutterBottom>Recovered</Typography>
                        {/* <Typography variant="h5">
            <CountUp className="fontType" start={0} end={Number(props.data.dailyRecovered)} duration={2} separator="," />
        </Typography> */}
                        <Typography className="fontType newCasesFont" color="textSecondary"><span class="material-icons plus-icon"> add </span>{props.data.dailyRecovered}</Typography>

                        <Typography className="fontType" color="textSecondary">{props.data.totalRecovered}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className="card deceased">
                    <CardContent>
                        <Typography className="fontType" color="textSecondary" gutterBottom>Deceased</Typography>
                        {/* <Typography variant="h5">
            <CountUp className="fontType" start={0} end={Number(props.data.dailyDeceased)} duration={2} separator="," />
        </Typography> */}
                        <Typography className="fontType newCasesFont" color="textSecondary"><span class="material-icons plus-icon"> add </span>{props.data.dailyDeceased}</Typography>

                        <Typography className="fontType" color="textSecondary">{props.data.totalDeceased}</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>)
};


export default Cards;