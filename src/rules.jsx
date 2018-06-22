import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

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

  componentWillMount = () => {
    let self = this;
    axios.get(`${process.env.REACT_APP_API_URL}/rules`)
    .then(function (response) {
      const data = response.data;
      self.setState({rules: data});
    })
  }

  state = {
    rules: null
  }


  render() {
    const { classes } = this.props;
    const { rules } = this.state;

    if (rules === null){
      return <h1>Loading</h1>
    } else {
      return (
        <div className={classes.root}>
          <Grid container spacing={16}>
            <Grid item xs={12} md={6}>
              <Typography variant="title" className={classes.title}>
                Rules
              </Typography>
              <div className={classes.demo}>
                <List>
                  {rules.map((rule, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={rule.description}
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default withStyles(styles)(Rules);