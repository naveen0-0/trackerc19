import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css'

const Cards = ({data : { confirmed, recovered, deaths, lastUpdate }})=>{
if(!confirmed){
   return 'Loading....'
}
   return(
      <div className={styles.contaienr}>
         <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom className={styles.head}>Infected</Typography>
                  <Typography variant="h5">
                     <CountUp start={0} end={confirmed.value} duration={3} separator=","/>
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of Active Cases of Covid19</Typography>
               </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom className={styles.head}>Recovered</Typography>
                  <Typography variant="h5">
                     <CountUp start={0} end={recovered.value} duration={3} separator=","/>
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of Recovered Cases of Covid19</Typography>
               </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom className={styles.head}>Deaths</Typography>
                  <Typography variant="h5">
                     <CountUp start={0} end={ deaths.value } duration={3} separator=","/>
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of Deaths Caused by Covid19</Typography>
               </CardContent>
            </Grid>
         </Grid>
      </div>
   )
}

export default Cards;