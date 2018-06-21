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
    <Leaderboard />
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);