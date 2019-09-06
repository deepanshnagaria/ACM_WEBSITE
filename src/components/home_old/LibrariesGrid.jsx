import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Grid, Typography, Container } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import appetizer from "../../assets/appetizer_home.svg";
import musicdna from "../../assets/musicdnahome.svg";
import campusbuddy from "../../assets/campusbuddyhome.svg";
import SeeMoreCard from "./SeeMoreCard";
import emojireactview from "../../assets/EmojiReactionView.gif"
import animatedtextkit from "../../assets/AnimatedTextKit.gif"
import rotatingtext from "../../assets/RotatingText.gif"
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

class AppsGrid extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item md={3} sm={6} xs={12}>
            <a href="https://github.com/mdg-iitr/EmojiReactionView"><ProjectCard image={emojireactview} /></a>

          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <a href="https://github.com/mdg-iitr/Animated-Text-Kit"><ProjectCard image={animatedtextkit} /></a>

          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <a href="https://github.com/mdg-iitr/RotatingText"><ProjectCard image={rotatingtext} /></a>

          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Link to="/projects" className={classes.link}>
              <SeeMoreCard project="libraries" />
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default (withStyles(styles)(AppsGrid));
