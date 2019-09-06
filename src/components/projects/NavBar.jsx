import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/logo.svg";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    fontSize: 1
  },
  button: {
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
    ].join(","),
    fontSize: "14px"
  },
  buttonSelected: {
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
    ].join(","),
    fontSize: "14px",
    color: "#2B60F0"
  },
  logo: {
    paddingTop: "4px",
    marginLeft: "-8px"
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar
        className={"AppBar"}
        style={{ boxShadow: "0px 0px 0px 0px" }}
        position="static"
        color="#000000"
      >
        <div>
          <Toolbar>
            <Grid container spacing={24}>
              <Grid item xs={1}>
                <img src={logo} alt="im" className={classes.logo} />
              </Grid>
              <Grid item xs={5} sm={8} />
              <Grid item xs={2} sm={1}>
                <Button
                  className={classes.buttonSelected}
                  style={{
                    marginLeft: "-12px"
                  }}
                >
                <a style={{ textDecoration: 'none',color:'#000000' }} href="http://localhost:3000/projects">
                  Projects
                  </a>
                </Button>
              </Grid>
              <Grid item xs={2} sm={1}>
                <Button className={classes.button}>
                <a style={{ textDecoration: 'none',color:'#000000' }} href="http://localhost:3000/team">
                Team
                </a>
                </Button>
              </Grid>
              <Grid item xs={2} sm={1}>
                <Button className={classes.button}>
                <a style={{ textDecoration: 'none',color:'#000000' }} href="http://localhost:3000/blogs">
                Blogs
                </a>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </div>
      </AppBar>
      <div style={{ height: "32px" }} />
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
