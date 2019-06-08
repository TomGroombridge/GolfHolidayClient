import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function SimpleAppBar(props) {  
  return (    
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Esquilo Morto 2019
          </Typography>
        </Toolbar>
      </AppBar>    
  );
}


export default (SimpleAppBar);