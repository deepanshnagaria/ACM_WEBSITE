import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Members from "../../components/team/Members";
import Alumni from "../../components/team/Alumni"
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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

class TeamPage2 extends Component {

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
      <div>

        
        <div className={classes.root}>



          <Grid
            container
            spacing={24}
            style={{ alignItems: "initial" }}>

            <h1 style={{ textAlign: "left", padding: "10px", marginTop: '24px' }}>We are family</h1>
            <Grid item xs={12}>
              <Tabs
                value={value}
                onChange={this.handleChange}
                classes={{
                  root: classes.tabsRoot,
                  indicator: classes.tabsIndicator
                }}
                style={{ marginBottom: '30px' }}
              >
                <LinkTab
                  disableRipple
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected
                  }}
                  label="Members"
                  style={{ fontWeight: 'bold', fontSize: '17px' }}
                />
                <LinkTab
                  disableRipple
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected
                  }}
                  style={{ fontWeight: 'bold', fontSize: '17px' }}
                  label="Alumni"
                />
              </Tabs>
              {value === 0 && <Members />}
              {value === 1 && <Alumni />}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TeamPage2);
