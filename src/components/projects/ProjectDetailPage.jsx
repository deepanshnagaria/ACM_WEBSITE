import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import googleplayimage from "../../assets/googleplay-icon.svg";
import appstoreimage from "../../assets/appstore-icon.svg";
import CreatorCard from "./CreatorCard"
import "../Footer/footer.css";
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // width: "100%",
    marginTop: "64px",
  },
  text:{
    textAlign: "left",
    color: "#707070"
  }
});


function NavDirection(props) {
  return (
    <a href="/projects" style={{ textDecoration: 'none',color:'#FFFFFF' }}>
    <div style={{marginBottom:"20px"}}>
      <b style={{color : "#2B60F0",fontSize:"18px",marginLeft:"10px"}}>
        {props.type} > {props.project} description
      </b>
    </div>
    </a>
  );
}
// var data = require("../projects/Apps_data.json");
//data = data.slice(0,1);
class ProjectDetailPage extends Component{
  
  constructor(props){
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
   
    return this.state.data.slice(this.props.index, this.props.index+1).map(obj=>{
      const imgaddress = require("../../assets/" + obj.image);
      console.log(imgaddress);     
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
         <Grid
          container
          spacing={24}
          style={{alignItems: "flex-start", }}>
            {<NavDirection type="Apps" project={obj.title}/>}
         </Grid>

        <Grid
          container
          spacing={24}
          style={{alignItems: "flex-start", }}>
            {/*           
          Features
          */}
          <Grid item xs={12} sm={8} md={6}>
            <h1 style={{textAlign:"left",marginTop:"10px" }}>{obj.title}</h1>

            <p className={classes.text}>
            {obj.desc}
            </p>  

            <h3 style={{textAlign:"left"}}>Feature</h3>
            <p className={classes.text} style={{marginLeft:"-40px"}}>
            
           { obj.Features.map((list,i)=>(   
           <ul key={i} >
             {list}
           </ul>
           ))
           }
            </p>
          </Grid>

          <Grid item sm={4} md={6}>
            <img src={imgaddress} alt={"App Image"} style={{ width: "80%" }} />
          </Grid>
         </Grid>
        
        <Grid
          container
          spacing={24}
          style={{alignItems: "start", marginTop: "50px",}}>
          

          <Grid item xs={12}>
            <p style={{ textAlign: "left" }}>
              Available on
            </p>
          </Grid>

          <Grid item xs={12}>
            <div style={{ textAlign: "left", marginTop: "-30px" }}>
            <a style={{ textDecoration: 'none',color:'#FFFFFF' }} target="_blank" href={obj.otherLinks}>
              <img
                src={googleplayimage}
                alt={"Google Play"}
                style={{ marginRight: "4px" }}
              />
              </a>
              <a style={{ textDecoration: 'none',color:'#FFFFFF' }} target="_blank" href="https://apps.apple.com/us/developer/kush-taneja/id1177582987">
              <img
                src={appstoreimage}
                alt={"App Store"}
                style={{ marginLeft: "4px" }}
              />
              </a>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={24}
          style={{alignItems: "start", marginTop: "50px",}}>
          

          <Grid item xs={12}>
            <h2 style={{ textAlign: "left" }}>
              Creators involved
            </h2>
          </Grid>

          <div>
         <Grid container spacing={8}>
          { obj.creators.map((creator,i)=>(
          <Grid item md={6} sm={12} xs={12} key={i}>
            <CreatorCard name={creator.name} role={creator.role} image={creator.image}></CreatorCard>
          </Grid> 
          ))}               
         </Grid>
      </div>

          <Grid item xs={12}>
            {/* <h3 style={{ textAlign: "left" }}>
              Other Resources
            </h3> */}
         </Grid>

          <Grid item xs={12}>
          </Grid>
        </Grid>
      </div>
    );
    });
  }
}

export default withStyles(styles)(ProjectDetailPage);
