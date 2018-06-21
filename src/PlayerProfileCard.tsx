import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export interface IPlayerProfile {
  handleOpen: Function;
}

export default class PlayerProfileCard extends React.Component<IPlayerProfile, any> {

  render() {
    return (
      <div>
        <Card onClick={this.props.handleOpen.bind(this)}>
          <CardMedia

            image="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/19366125_10154507153902750_3629226289924717211_n.jpg?_nc_cat=0&oh=d2c302dda2979511305fc9e36971e281&oe=5BA9726D"
            title="Live from space album cover"
          />
          <div>
            <CardContent>
              <Typography variant="subheading">Tom Groombridge</Typography>
              <Typography variant="subheading" color="textSecondary">
                Mac Miller
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }

}