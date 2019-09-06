import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Facebook from 'mdi-material-ui/FacebookBox'
import Github from 'mdi-material-ui/GithubBox'
import Twitter from 'mdi-material-ui/TwitterBox'
import Dribbble from 'mdi-material-ui/DribbbleBox'
import Website from 'mdi-material-ui/AccountBox'
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} style={{margin: '3px', marginBottom:'15px'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Image"
        />
        <CardContent style={{textAlign: 'start'}}>
          <Typography gutterBottom variant="h6" style={{fontWeight:'600'}}>
            {props.name}
          </Typography>
          <Typography variant="subtitle2">
            {(props.post != null)?props.post:props.passingYear}
          </Typography>
          <Typography variant="subtitle2">
            {(props.currentlyAt != null)?props.currentlyAt:null}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {(props.facebookId != null)?(<a style={{ textDecoration: 'none', color: '#707070'}} target="_blank" href={props.facebookId}>
          <Facebook />
        </a>): null}
        {(props.githubId != null)?(<a style={{ textDecoration: 'none', color: '#707070'}} target="_blank" href={props.githubId}>
          <Github />
        </a>): null}
        {(props.dribbbleId != null)?(<a style={{ textDecoration: 'none', color: '#707070'}} target="_blank" href={props.dribbbleId}>
          <Dribbble />
        </a>): null}
        {(props.twitterId != null)?(<a style={{ textDecoration: 'none', color: '#707070'}} target="_blank" href={props.twitterId}>
          <Twitter />
        </a>): null}
        {(props.websiteId != null)?(<a style={{ textDecoration: 'none', color: '#707070'}} target="_blank" href={props.websiteId}>
          <Website />
        </a>): null}
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);