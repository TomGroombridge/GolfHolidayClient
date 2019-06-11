import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from './bottomNavigation';
import AppBar from './appBar'
import Leaderboard from './leaderboard'

const Routes = () => {
  return (    
    <BrowserRouter>
      <Switch>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <AppBar />
            <Route component={() => <Leaderboard game={'accumalative'} />} path="/" exact/>
            <Route component={() => <Leaderboard game={'team'} />} path="/team" exact/>
            <Route component={() => <Leaderboard game={'individual'} />} path="/individual" exact/>
            <BottomNavigation />
          </Grid>
        </Grid>        
      </Switch>
    </BrowserRouter>   
  )
}


export default (Routes);