import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions'

const styles = theme => ({
  card: {
    margin: 8
  },
  media: {
    height: 267,
    objectFit: 'fill'
  },
  fonts: {
    fontFamily: [
      "proxima-nova",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
})

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea style={{ textAlign: "left" }}>
        <CardMedia
          className={classes.media}
          image={require("../../assets/"+props.image)}
          title="Product"
        />
        <CardContent className={classes.fonts}>
          <h2 style={{ marginTop: "-4px" }} >
            {props.title}
          </h2>
          <p
            style={{
              marginTop: "-4px",
              fontSize: "16px",
              color: '#707070'
            }}
            className={classes.fonts}
          >
            {props.content}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
