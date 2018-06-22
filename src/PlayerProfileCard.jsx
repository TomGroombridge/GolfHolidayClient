import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 50,
    height: 50,
    marginRight: '10px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
});


class PlayerProfileCard extends React.Component {


  render() {
    const {player, classes} = this.props;
    return (
      <div>
        <Card onClick={this.props.handleOpen.bind(this, player)} className={classes.card}>
          <CardMedia className={classes.cover}>
            <Avatar
              alt="Adelle Charles"
              src={player.profile_pic_path}
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
          </CardMedia>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="headline">{player.name}</Typography>
              <Typography variant="subheading" color="textSecondary">
                Handicap: {player.handicap}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }

}

export default withStyles(styles)(PlayerProfileCard);