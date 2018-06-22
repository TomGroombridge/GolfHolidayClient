import * as React from 'react';
import PlayerProfileCard from './PlayerProfileCard.jsx';
import PlayerProfileModal from './PlayerProfileModal';
import axios from 'axios';

export default class PlayerProfiles extends React.Component {

	state = {
    open: false,
    players: null,
    modalPlayer: null,
  };

  componentWillMount = () => {
    let self = this;
    axios.get(`${process.env.REACT_APP_API_URL}/players`)
    .then(function (response) {
      const data = response.data;
      self.setState({players: data});
    })
  }

  handleOpen = (player, event) => {
    this.setState({ open: true, modalPlayer: player});
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {players, modalPlayer} = this.state
    if (players === null) {
      return <h1>Loading</h1>;
    } else {
    	return (
    		<div>
    			<PlayerProfileModal open={this.state.open} handleClose={this.handleClose.bind(this)} player={modalPlayer}/>
          {players.map((player: any, index) => (
    			  <PlayerProfileCard handleOpen={this.handleOpen.bind(this)} key={index} player={player}/>
          ))}
    		</div>
    	);
    }
  }

}
