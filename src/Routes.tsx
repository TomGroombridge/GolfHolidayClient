import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Leaderboard from './leaderboard'
import Grid from '@material-ui/core/Grid';
import SimpleBottomNavigation from './bottomNavigation';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './appBar'
import PlayerProfiles from './PlayerProfiles.jsx';
import Rules from './rules';



const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    paddingRight: '0px !important',
  },
  content: {
    paddingBottom: '50px',
  }
});

function Routes(props: any) {
  const { classes } = props;

  return (
    
      <BrowserRouter>
        <Switch>
          <div className={classes.root}>
            <Grid container spacing={10}>
              <Grid item xs={12} sm={6} className={classes.padding}>
                <AppBar />
                <div className={classes.content}>
                  <Route exact path='/' component={Leaderboard}/>
                  <Route exact path='/players' component={PlayerProfiles}/>
                  <Route exact path='/rules' component={Rules}/>
                </div>
                <SimpleBottomNavigation />
              </Grid>
            </Grid>
          </div>
        </Switch>
      </BrowserRouter>
   
  )
}

export default withStyles(styles)(Routes);