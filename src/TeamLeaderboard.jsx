import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PositionPanel from './positionPanel';
import Loading from './loading';
import axios from 'axios';


const styles = theme => ({
  root: {
    width: '100%',
    paddingBottom: '50px',
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    marginLeft: '15px',
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
    leaderboard: null
  };

  componentWillMount = () => {
    let self = this;
    axios.get(`${process.env.REACT_APP_API_URL}/leaderboard`)
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
      return <Loading />;
    } else {
      return (
        <div className={classes.root}>
          <Typography variant="title" className={classes.title}>
            Leaderboard
          </Typography>
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