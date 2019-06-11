import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PositionPanel from './positionPanel';
import TeamPanel from './teamPanel';
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

class Leaderboard extends React.Component {

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
    const { classes, game } = this.props;
    const { expanded, leaderboard } = this.state;    
    let title
    if (game === 'accumalative'){
      title = 'Accumalative Leaderboard'
    } else if (game === 'individual') {
      title = 'Individual Leaderboard'
    } else {
      title = 'Team Leaderboard'
    } 
    if (leaderboard === null) {
      return <Loading />;
    } else {
      return (
        <div className={classes.root}>
          <Title fontSize="h6.fontSize">
            {title}
          </Title>          
          {leaderboard.map((player, index) => {
            console.log('player', player)
            if (game === 'team') {
              return ( 
                <TeamPanel
                  expanded={expanded}
                  handleChange={this.handleChange.bind(this)}
                  panelNumber={`panel${index}`}
                  key={index}
                  position={index + 1}
                  team={player}
              />
              )
            }
            return(
              <PositionPanel
                expanded={expanded}
                handleChange={this.handleChange.bind(this)}
                panelNumber={`panel${index}`}
                key={index}
                position={index + 1}
                name={player.player_name}
                score={player.score}                
                rounds={player.rounds}/>
            )                               
          })}
        </div>
      )
    }
  }
}

const Title = styled(Box)`
  margin: 10px
`;

Leaderboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Leaderboard);