import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

class Loading extends React.Component {

	render() {
		return (
			<h1>Loading</h1>
		);
	}
}

export default withStyles(styles)(Loading);