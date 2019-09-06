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
    var url="https://api.github.com/gists/e80a40425f27cd4725158cbb2eb0814b";
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({data : JSON.parse(d.files["mdg_alumni_details"].content)});
        console.log(this.state.data)
      })
  }

  render() {
    return (
      <div>

        <Grid container spacing={8} style={{ padding: "8px" }}>
            {
              this.state.data.map((member,i) =>(
              <Grid item xs={12} sm={6} md={3} key={i}>
                <TeamCard
                  image={(member.PROFILEPICURL == null) ? "https://avatars.githubusercontent.com/" + member.GITHUBID : member.PROFILEPICURL}
                  name={member.NAME}
                  passingYear={(member.PASSING_YEAR != null)? ("Passing Year: "+member.PASSING_YEAR): null}
                  currentlyAt={member.CURRENTLY_AT}
                  facebookId={(member.FACEBOOKID != null)? ("https://www.facebook.com/" + member.FACEBOOKID) : null}
                  githubId={(member.GITHUBID != null)? ("https://github.com/" + member.GITHUBID) : null}
                  dribbbleId = {(member.DRIBBBLEID != null)? ("https://dribbble.com/" + member.DRIBBBLEID) : null}
                  twitterId = {(member.TWITTERID != null)? ("https://dribbble.com/" + member.TWITTERID) : null}
                  websiteId = {(member.WEBSITEID != null)? (member.WEBSITEID) : null}
                />
              </Grid>
            ))
            }
          <div style={{ flex: 1, alignItems: 'center' }}>
          </div>
        </Grid>

      </div>
    );
  }
}

export default TeamPage;
