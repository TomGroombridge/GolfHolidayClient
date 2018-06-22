import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  container: {
  	position: 'absolute',
    top: '38%',
    marginLeft: '36%',
  },
});

class Loading extends React.Component {

	state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timer;

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <CircularProgress
          className={classes.progress}
          variant="determinate"
          size={50}
          value={this.state.completed}
        />
      </div>
    );
  }


}

export default withStyles(styles)(Loading);