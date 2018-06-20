import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PositionPanel from './positionPanel'

const styles = theme => ({
  root: {
    width: '100%',
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <PositionPanel expanded={expanded} handleChange={this.handleChange.bind(this)} panelNumber={'panel1'}/>
        <PositionPanel expanded={expanded} handleChange={this.handleChange.bind(this)} panelNumber={'panel2'}/>
        <PositionPanel expanded={expanded} handleChange={this.handleChange.bind(this)} panelNumber={'panel3'}/>
        <PositionPanel expanded={expanded} handleChange={this.handleChange.bind(this)} panelNumber={'panel4'}/>
        <PositionPanel expanded={expanded} handleChange={this.handleChange.bind(this)} panelNumber={'panel5'}/>
        <PositionPanel expanded={expanded} handleChange={this.handleChange.bind(this)} panelNumber={'panel6'}/>
        <PositionPanel expanded={expanded} handleChange={this.handleChange.bind(this)} panelNumber={'panel7'}/>
        <PositionPanel expanded={expanded} handleChange={this.handleChange.bind(this)} panelNumber={'panel8'}/>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);