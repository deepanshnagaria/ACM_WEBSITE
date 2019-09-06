import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import { Link, withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
const styles = theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

class AppsGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }
  componentDidMount() {
    var url="https://api.github.com/gists/7f2f79f83942aef17c1d6caa6a8d12f6";
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({data : JSON.parse(d.files["mdg_app_data"].content)});
        console.log(this.state.data)
      })
  }

  render() {
    const { classes } = this.props;
    
    return (
      <Grid container spacing={8}>
        {this.state.data.map((obj, i) => (
          <Grid item md={4} sm={6} xs={12} key={i}>
            <a href={obj.link} className={classes.link} style={{textDecoration: 'none', color:'inherit'}}> 
            
              <ProjectCard
                image={obj.cardImage}
                title={obj.title}
                content={obj.shortDesc}
              />
            
            </a>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(AppsGrid));
