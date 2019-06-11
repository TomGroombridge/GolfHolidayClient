import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '10.00%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: '70.00%',
  },
  thirdHeading: {
  	fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: '20.00%',
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});


class PositionPanel extends React.Component {

  render() {
    const { expanded, panelNumber, classes, position} = this.props;
    
    return (
      <ExpansionPanel expanded={expanded === panelNumber} onChange={this.props.handleChange(panelNumber)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{position}</Typography>
          <Typography className={classes.secondaryHeading}>{this.props.name}</Typography>
          <Typography className={classes.thirdHeading}>{this.props.score}pts</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {this.props.rounds.map((round, index) => (            
            <Badge className={classes.margin} badgeContent={round.score} color="primary" />
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

PositionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionPanel);