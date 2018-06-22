import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ClearIcon from '@material-ui/icons/Clear';

const styles = theme => ({
  paper: {
    position: 'relative',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
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
    const { classes, player } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.handleClose.bind(this)}
        >
          {player !== null ?
              <div className={classes.paper}>
                <Button style={{float: 'right'}} onClick={this.props.handleClose.bind(this)}><ClearIcon /></Button>
                <br/>
                <Typography variant="title" id="modal-title">
                  {player.name}
                </Typography>
                <br />
                <Typography variant="subheading" id="simple-modal-description">
                  {player.description}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Age"
                      secondary={player.age}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Last Year Position"
                      secondary={player.last_year_position}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Double Hole"
                      secondary={player.double_hole}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Form"
                      secondary="Not Great"
                    />
                  </ListItem>
                </List>
              </div> : <h1></h1>
            }
        </Modal>
      </div>
    );
  }
}


// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;