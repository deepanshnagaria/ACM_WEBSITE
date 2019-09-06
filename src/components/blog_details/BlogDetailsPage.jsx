import React, { Component } from "react";

import { Grid } from "@material-ui/core";
import ByCard from "./ByCard";
import AppMarkdown from '../../assets/blogs/gsoc19.md';
import ReactMarkdown from 'react-markdown';
import BlogImage from '../../assets/image.svg';
// import BlogImage from "../../assets/blog_details_image.svg";

class BlogDetailsPage extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
      }
      
      componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
      }
    
      
    render() {
        const { markdown } = this.state;
        return(
            <div style={{ marginTop: "48px", marginBottom: "20px"}}>
            <Grid container spacing = {8} style={{ padding: "8px" }}>
                
               

                <Grid item xs = {12}>
                    <img src={BlogImage}
                    alt="sorry, abhi ke liye" 
                    style={{width: "100%"}}/>  
                </Grid>

                <Grid item xs={12}>
                    <h1 /* className={}  */
                    title={'BlogHeading'}
                    style={{ textAlign: "left", 
                            paddingBottom: "0px",
                            marginBottom: '0px',
                            fontSize: "48px",
                            color:"#242424"}}>
                            Heading
                    </h1>
                </Grid>
                <Grid item xs={12}>
                    <p /* className={}  */
                    style={{ textAlign: "left", 
                    paddigTop: "0px",
                    marginTop: '0px',
                    fontSize: "14px",
                    color: "#707070"
                    }}>
                        12 December 2018
                        {/* {this.props.date} */}
                    </p>
                </Grid>

                <Grid item xs={12}>
                    <ReactMarkdown source={markdown} /> 
                        {/* {this.props.code} */}
                </Grid>
                
                {/* <Grid item xs={3}>
                    <ByCard 
                        image={Image}
                        name={/* Enter name }
                        details={/* Enter details}
                    />
                </Grid> */}
            </Grid>
            </div>    
        );
    }
}

export default BlogDetailsPage;
