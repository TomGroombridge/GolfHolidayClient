import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import FaceIcon from '@material-ui/icons/Face';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import GroupIcon from '@material-ui/icons/Group'
import PersonIcon from '@material-ui/icons/Person'
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
        <BottomNavigationAction label="Accumalative" icon={<GolfCourseIcon />} value="/"/>
        <BottomNavigationAction label="Team" icon={<GroupIcon />} value="/team"/>
        <BottomNavigationAction label="Individual" icon={<PersonIcon />} value="/individual"/>        
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(SimpleBottomNavigation));