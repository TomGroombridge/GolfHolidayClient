import * as React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Leaderboard from './leaderboard'
import configureStore from './redux/configureStore';
import Grid from '@material-ui/core/Grid';
import SimpleBottomNavigation from './bottomNavigation';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './appBar'
import PlayerProfiles from './PlayerProfiles';
import Rules from './rules';

const store = configureStore();

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    paddingRight: '0px !important',
  }
});

function Routes(props: any) {
  const { classes } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6} className={classes.padding}>
                <AppBar />
                <Route exact path='/' component={Leaderboard}/>
                <Route exact path='/players' component={PlayerProfiles}/>
                <Route exact path='/rules' component={Rules}/>
                <SimpleBottomNavigation />
              </Grid>
            </Grid>
          </div>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default withStyles(styles)(Routes);