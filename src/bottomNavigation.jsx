import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import {
  withRouter
} from 'react-router-dom';

const styles = theme => ({
  nav: {
    position: 'fixed',
    width: '100%',
    bottom: '0px',
    zIndex: 1,
  },
});

class SimpleBottomNavigation extends React.Component {
  state = {
    value: '/',
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(value)
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.nav}
      >
        <BottomNavigationAction label="Leaderboard" icon={<RestoreIcon />} value="/"/>
        <BottomNavigationAction label="Players" icon={<FavoriteIcon />} value="/players"/>
        <BottomNavigationAction label="Rules" icon={<LocationOnIcon />} value="/rules"/>
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(SimpleBottomNavigation));