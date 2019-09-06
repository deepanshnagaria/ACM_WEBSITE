import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import googleplayimage from "../../assets/googleplay-icon.svg";
import appstoreimage from "../../assets/appstore-icon.svg";
import AppsGrid from "../../components/projects/AppsGrid"
import LibrariesGrid from "../../components/projects/LibrariesGrid"
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: "48px"
  },
  tabsRoot: {
    borderBottom: "1px solid #C3C3C3"
  },
  tabsIndicator: {
    backgroundColor: "#2b60f0",
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
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
    "&:hover": {
      color: "#40a9ff",
      opacity: 1
    },
    "&$tabSelected": {
      //color: Colours.palette.primary.main,
      color: "#2b60f0",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#40a9ff"
    }
  },
  tabSelected: {},
  margin: {
    margin: theme.spacing.unit
  }
})

function LinkTab(props) {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
}

class ProjectPage extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, value: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={24}
          style={{ alignItems: "initial" }}
        >
          <h1 style={{ textAlign: "left", padding: "10px" }}>Projects</h1>
          <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={this.handleChange}
              classes={{
                root: classes.tabsRoot,
                indicator: classes.tabsIndicator
              }}
              style={{marginBottom: '30px'}}
            >
              <LinkTab
                disableRipple
                classes={{
                  root: classes.tabRoot,
                  selected: classes.tabSelected
                }}
                label="Apps"
                style={{fontWeight: 'bold', fontSize: '17px'}}
              />
              <LinkTab
                disableRipple
                classes={{
                  root: classes.tabRoot,
                  selected: classes.tabSelected
                }}
                style={{fontWeight: 'bold', fontSize: '17px'}}
                label="Libraries"
              />
            </Tabs>
            {value === 0 && <AppsGrid />}
            {value === 1 && <LibrariesGrid />}
          </Grid>
          {/*
           *
           *
           *  Links
           *
           *
           */}
          <Grid item xs={12} style={{ marginTop: '40px' }}>
          <Typography variant="caption" gutterBottom style={{ textAlign: "center", fontSize: "14px", marginBottom: "10px" }}>
              Find Mobile Development Group’s apps on {"  "}
            </Typography>
          

          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <a style={{ textDecoration: 'none', color: '#FFFFFF' }} target="_blank" href="https://play.google.com/store/apps/developer?id=MDG,+SDS">
              <img
                src={googleplayimage}
                alt={"Google Play"}
                style={{ marginRight: "4px"}}
              />
            </a>
            <a style={{ textDecoration: 'none', color: '#FFFFFF' }} target="_blank" href="https://apps.apple.com/us/developer/kush-taneja/id1177582987">
              <img
                src={appstoreimage}
                alt={"App Store"}
                style={{ marginLeft: "4px" }}
              />
            </a>
          </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectPage);
