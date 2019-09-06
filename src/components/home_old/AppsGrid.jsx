import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import { Link, withRouter } from 'react-router-dom';
import appetizer from "../../assets/appetizer_home.svg";
import musicdna from "../../assets/musicdnahome.svg";
import campusbuddy from "../../assets/campusbuddyhome.svg";
import SeeMoreCard from "./SeeMoreCard";
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
            <a href="/projects/AppetizerDetail">
              <ProjectCard image={appetizer} />
            </a>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <a href="/projects/MusicDnaDetail">
              <ProjectCard image={musicdna} />
            </a>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <a href="/projects/CampusBuddyDetail">
              <ProjectCard image={campusbuddy} />
            </a>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <a href="/projects" className={classes.link}>
            <SeeMoreCard project="apps" />
            </a>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default (withStyles(styles)(AppsGrid));
