import React, { Suspense } from 'react';
import { Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import './App.css';
import fetchResource from './fetch'
import SelectCountry from "./components/SelectCountry"
import { GlobalProvider } from './GlobalContext' 
import CardsWrapper from './components/CardsWrapper';
import ChartsWrapper from './components/ChartsWrapper';
const resource = fetchResource('https://covid19.mathdro.id/api/countries')

function App() {
  return (
      <GlobalProvider>
        <Grid container direction="column" justify="space-between" align="center">
          <Grid item>
            <img className="logo" src="https://i.ibb.co/7QpKsCX/image.png" alt="covid_logo"/>
          </Grid>
          <Grid item>
            <Suspense fallback={<Skeleton animation="wave" width={400} height={80}/>}>    
              <SelectCountry data={resource}></SelectCountry>
            </Suspense>
          </Grid>
          <Grid item>
              <CardsWrapper></CardsWrapper>
          </Grid>
            <Grid item>
              <ChartsWrapper></ChartsWrapper>
            </Grid>
        </Grid>
      </GlobalProvider>

  );
}

export default App;