import React, { Component } from "react";
import { Grid ,Typography } from "@material-ui/core";
import BlogCard from "./BlogCard"
import googleplayimage from "../../assets/googleplay-icon.svg";
import appstoreimage from "../../assets/appstore-icon.svg";
import Blogs from"../../assets/blogs/Blogs.json";
class BlogPage extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }
  componentDidMount() {
    var url="https://api.github.com/gists/b4b9341c66ec7fad324966677c656ba4";
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({data : Blogs});
        console.log(Blogs)
      })
  }
  render(){
        return(
          <div>
          <Grid container spacing={8} style={{ padding: "8px" }}>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "left" , fontSize: '40px', marginBottom: '60px' }}>Blogs</h1>
          </Grid>
            
            {/*
           *
           *
           * 
           * 
           *Blogs Cards
           *
           * 
           * 
           * 
           */}

          {this.state.data.map((obj, i) => (
            <Grid item sm={6} xs={12} key={i}>
              
                <BlogCard
                  image={require("../../assets/blogs/images/"+obj.image)}
                  title={obj.title}
                  date={obj.date}
                  content={obj.desc}
                  author={obj.author}
                  link={obj.link}
                />
              
            </Grid>
          ))}

          </Grid>
          {/*
           *
           *
           *  Links
           *
           *
           */}
          <br></br>
          <br></br>
          <br></br>
      </div>
        );
    }
}

export default BlogPage;
