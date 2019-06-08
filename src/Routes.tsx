import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from './bottomNavigation';
import AppBar from './appBar'
import Leaderboard from './leaderboard'

function Routes(props: any) {

  return (    
    <BrowserRouter>
      <Switch>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <AppBar />
            <Leaderboard />
            <BottomNavigation />
          </Grid>
        </Grid>        
      </Switch>
    </BrowserRouter>   
  )
}

export default (Routes);