import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import TeamCard from "./TeamCard"

class TeamPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount() {
    var url="https://api.github.com/gists/290cacfa026bbbe93f36b6cf2df7b0db";
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({data : JSON.parse(d.files["mdg_team_details"].content)});
        console.log(this.state.data)
      })
  }

  render() {
    return (
      <div>

        <Grid container spacing={8} style={{ padding: "8px" }}>
          {/* <Grid item xs={12}>
            <h1 style={{ textAlign: "left", marginBottom: "40px" }}>We are family</h1>
          </Grid> */}

          {
            // members.map((member, i) => (
              this.state.data.map((member,i) =>(
              <Grid item xs={12} sm={6} md={3} key={i}>
                <TeamCard
                  image={(member.PROFILEPICURL == null) ? "https://avatars.githubusercontent.com/" + member.GITHUBID : member.PROFILEPICURL}
                  name={member.NAME}
                  post={member.POST}
                  facebookId={(member.FACEBOOKID != null)? "https://www.facebook.com/" + member.FACEBOOKID : null}
                  githubId={(member.GITHUBID != null)? ("https://github.com/" + member.GITHUBID) : null}
                  dribbbleId = {(member.DRIBBBLEID != null)? ("https://dribbble.com/" + member.DRIBBBLEID) : null}
                  twitterId = {(member.TWITTERID != null)? ("https://dribbble.com/" + member.TWITTERID) : null}
                  websiteId = {(member.WEBSITEID != null)? (member.WEBSITEID) : null}
                />
              </Grid>
            ))
            }
          
        </Grid>

      </div>
    );
  }
}

export default TeamPage;
