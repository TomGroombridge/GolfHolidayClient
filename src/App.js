import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleBottomNavigation from './bottomNavigation';
import Leaderboard from './leaderboard'
import AppBar from './appBar'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    paddingRight: '0px !important',
  }
});

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} className={classes.padding}>
          <AppBar />
          <Leaderboard />
          <SimpleBottomNavigation />
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);