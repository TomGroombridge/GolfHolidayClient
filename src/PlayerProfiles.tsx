import * as React from 'react';
import PlayerProfileCard from './PlayerProfileCard';
import PlayerProfileModal from './PlayerProfileModal';

export default class PlayerProfiles extends React.Component {

	state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
  	return (
  		<>
  			<PlayerProfileModal open={this.state.open} handleClose={this.handleClose.bind(this)}/>
  			<PlayerProfileCard handleOpen={this.handleOpen.bind(this)}/>
  			<PlayerProfileCard handleOpen={this.handleOpen.bind(this)}/>
  			<PlayerProfileCard handleOpen={this.handleOpen.bind(this)}/>
  			<PlayerProfileCard handleOpen={this.handleOpen.bind(this)}/>
  			<PlayerProfileCard handleOpen={this.handleOpen.bind(this)}/>
  			<PlayerProfileCard handleOpen={this.handleOpen.bind(this)}/>
  		</>
  	);
  }

}
