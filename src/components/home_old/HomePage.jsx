import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AppsGrid from "./AppsGrid";
import LibrariesGrid from "./LibrariesGrid";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Fab from "@material-ui/core/Fab";
import Tab from "@material-ui/core/Tab";
import { Grid, Typography } from "@material-ui/core";
import homeicon from "../../assets/homeicon.svg";
import googleplayimage from "../../assets/googleplay-icon.svg";
import appstoreimage from "../../assets/appstore-icon.svg";
import BlogCard1 from "./BlogCard1"
import BlogCard2 from "./BlogCard2";
import "../Footer/footer.css";


import { createMuiTheme } from '@material-ui/core/styles';


var blogsJson = require("../../assets/blogs/Blogs.json");

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b60f0',
    },
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // width: "100%",
    marginTop: "40px",
  },
  headerText:{
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center"
    },
  },
  imageAlign:{
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: "80%"
    },
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
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(940 + theme.spacing.unit * 3 * 2)]: {
      width: 1040,
      marginTop: '80px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  tabSelected: {},
  margin: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: 'none',
    color: '#FF0000'
  }
});

function LinkTab(props) {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
}

class HomePage extends Component {
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

        {/*
         *
         *
         *
         *
         * Intro
         *
         *
         *
         * */}
        <main className={classes.layout}>
          <Grid
            container
            spacing={24}
            style={{ alignItems: "center", }}>
            <Grid item xs={12} sm={8} md={6} className={classes.headerText}>
              <h1 style={{ fontWeight: "lighter", fontSize: '40px' }}> ACM IITR</h1>
              <h1 style={{ marginTop: "-20px", fontSize: '40px' }}>Association of Computing Machinery</h1>
              <p>
              The IIT Roorkee ACM Student Chapter is an official student body incepted in 2014 under the aegis of Department of Computer Science and Engineering, IIT Roorkee. The chapter aims at uniting the computing fraternity at IIT Roorkee under one tag and allows the students to learn together and share their knowledge to cater the interests of the individuals as well as the institute as a whole. The chapter organizes a plethora of events which cover most of the fields of the computer science domain. These include hackathons, guest lectures, workshops, coding contests etc. which give the students an exposure to the competitive computing world as well as allow them to understand the advancements going on in the computing sphere worldwide. The primary mission of the IIT Roorkee ACM students Chapter is to provide a series of lectures, events, and a platform to bring together computing enthusiasts across the campus to promote the education and professional development of the student.
            </p>
            
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <img src={homeicon} alt={"home icon"} className={classes.imageAlign}/>
            </Grid>
          </Grid>
        </main>
        {/*
         *
         *
         *
         *
         * Projects
         *
         *
         *
         *
         * */}

        <div style={{ backgroundColor: "#F6F7FB" }}>
          <div className={classes.layout}>

            <Grid
              container
              spacing={24}
              style={{ alignItems: "start", marginTop: "150px", }}>
              <Grid item xs={12} style={{ marginTop: "16px"}}>
                <h3 style={{ fontWeight: "bold", textAlign: "initial" }}>Projects</h3>
                <Tabs
                  value={value}
                  onChange={this.handleChange}
                  classes={{
                    root: classes.tabsRoot,
                    indicator: classes.tabsIndicator
                  }}
                >
                  <LinkTab
                    disableRipple
                    classes={{
                      root: classes.tabRoot,
                      selected: classes.tabSelected
                    }}
                    style={{ fontWeight: 'bold', fontSize: '15px' }}
                    label="Apps"
                  />
                  <LinkTab
                    disableRipple
                    classes={{
                      root: classes.tabRoot,
                      selected: classes.tabSelected
                    }}
                    style={{ fontWeight: 'bold', fontSize: '15px' }}
                    label="Libraries"
                  />
                </Tabs>
                {value === 0 && <AppsGrid />}
                {value === 1 && <LibrariesGrid />}
                <a style={{ textDecoration: "none" }} href="https://github.com/mdg-iitr/" target="_blank">
                  <p style={{ color: "#2B60F0", textAlign: "right", marginRight: "20px" }}>
                    SEE ALL PROJECTS  >
            </p>
                </a>
              </Grid>

              <Grid item xs={12} style={{ marginBottom: "20px" }}>
                <Typography variant="caption" gutterBottom style={{ textAlign: "center", fontSize: "14px" }}>
                  Find Mobile Development Group’s apps on
            </Typography>
              </Grid>

              <Grid item xs={12}>
                <div style={{ textAlign: "center", marginTop: "-30px" }}>
                  <a style={{ textDecoration: 'none', color: '#FFFFFF' }} target="_blank" href="https://play.google.com/store/apps/developer?id=MDG,+SDS">
                    <img
                      src={googleplayimage}
                      alt={"Google Play"}
                      style={{ marginRight: "4px" }}
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
        </div>
        {/*
         *
         *
         *
         *
         *
         *
         * Blogs
         *
         *
         *
         *
         *
         * */}
        <div className={classes.layout}>
          <Grid
            container
            spacing={24}
            style={{ alignItems: "center", marginTop: "60px" }}>
            <Grid item xs={12}>
              <h2 style={{ fontWeight: "bold", textAlign: "initial" }}>Blogs</h2>
            </Grid>
            {/*
           *
           *
           *Blog Cards
           *
           * 
           */}
            <Grid item xs={12} sm={6} md={6}>
              <BlogCard1
                image={require("../../assets/blogs/images/" + blogsJson[0].image)}
                title={blogsJson[0].title}
                date={blogsJson[0].date}
                author={blogsJson[0].author}
                content={blogsJson[0].desc}
                linkStatement={""}
                link={blogsJson[0].link}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
              <BlogCard2
                image={require("../../assets/blogs/images/" + blogsJson[1].image)}
                title={blogsJson[1].title}
                date={blogsJson[1].date}
                author={blogsJson[1].author}
                content={blogsJson[1].desc}
                link={blogsJson[1].link}
              />
              <BlogCard2
                image={require("../../assets/blogs/images/" + blogsJson[2].image)}
                title={blogsJson[2].title}
                date={blogsJson[2].date}
                author={blogsJson[2].author}
                content={blogsJson[2].desc}
                link={blogsJson[2].link}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Link to="/blogs" className={classes.link}>
                <p style={{ color: "#2B60F0", textAlign: "right", marginRight: "20px", marginBottom: "40px" }}>
                  SEE ALL BLOGS  >
            </p>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);