import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    marginLeft: '15px',
  },
});


class Rules extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Typography variant="title" className={classes.title}>
              Rules
            </Typography>
            <div className={classes.demo}>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// InteractiveList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Rules);