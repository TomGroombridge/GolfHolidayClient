import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PositionPanel from './positionPanel'
import axios from 'axios';


const styles = theme => ({
  root: {
    width: '100%',
    paddingBottom: '50px',
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
    leaderboard: null
  };

  componentWillMount = () => {
    let self = this;
    axios.get('http://localhost:8080/leaderboard')
    .then(function (response) {
      const data = response.data;
      self.setState({leaderboard: data});
    })
  }


  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded, leaderboard } = this.state;

    if (leaderboard === null) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className={classes.root}>
          {leaderboard.map((player, index) => (
            <PositionPanel
              expanded={expanded}
              handleChange={this.handleChange.bind(this)}
              panelNumber={`panel${index}`}
              key={index}
              name={player.player_name}
              score={player.score}
              rounds={player.rounds}/>
          ))}
        </div>
      )
    }
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);