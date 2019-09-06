import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    height: '72px' ,
    margin: '10px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width:'100%',
    order:'1'
  },
  cover: {
    width: '80px',
    order: '0' 
  },

});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content} style={{textAlign:'left'}}>
          <Typography variant="h6">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.role}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
      style={{align:'left'}}
        className={classes.cover}
        image={props.image}
        title="Creator"
      />
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
