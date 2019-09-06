import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography"

import "./para.css";

const styles = {
    blogcard: {
      margin: 8
    },
    blogmedia: {
      height: 135,
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
};
function MediaCard(props) {
    const { classes } = props;
    return (
            <a href={props.link} style={{textDecoration: "none"}} target="_blank">
        <Card className={classes.blogcard}>
          <CardActionArea style={{ textAlign: "left" }}>
            <CardMedia
              className={classes.blogmedia}
              image={props.image}
              title="Product"
            />
            <CardContent>
          
              <Typography variant="h6" component="h2" style={{fontWeight: 'bold'}}>
                  {props.title}
              </Typography>
              
              <Typography variant="caption" color="#707070" style={{color:"#707070", marginBottom:"12px" }}>
                  {props.date}
              </Typography>
          
              <Typography component="p" style={{color:"#707070"}}>
                  {props.content}
              </Typography>
          
              <Typography  variant="caption"  style={{color:"#707070", marginTop:"12px" }}  gutterBottom>
                  By {props.author}
              </Typography>

            </CardContent>
          </CardActionArea>
          
        </Card>
      </a>
    );
  }
  
  MediaCard.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(MediaCard);
