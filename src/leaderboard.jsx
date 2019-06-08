import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PositionPanel from './positionPanel';
import Loading from './loading';
import axios from 'axios';
import styled from 'styled-components'


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
    axios.get(`${process.env.REACT_APP_API_URL}/leaderboard/${this.props.game}`)
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
          <Title fontSize="h6.fontSize">
            Leaderboard
          </Title>          
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

const Title = styled(Box)`
  margin: 10px
`;

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);