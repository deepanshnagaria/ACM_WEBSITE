import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { Grid } from '@material-ui/core';
import "./footerHome.css"
import Facebook from 'mdi-material-ui/FacebookBox'
import Github from 'mdi-material-ui/GithubBox'
import Medium from 'mdi-material-ui/Medium'
const styles = theme => ({

    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(940 + theme.spacing.unit * 3 * 2)]: {
            width: 940,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    fonts: {
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
        ].join(",")
    }
})
class FooterHome extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <footer className="FooterHome">
                <div className={classes.layout}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={6}>
                            <div style={{ marginBottom: "8px", marginTop: "12px", fontSize: "24px" }}>
                                <p>We ❤️ new friends</p>
                            </div>
                            <div style={{ marginBottom: "8px", marginTop: "12px", fontSize: "16px" }}>
                                <p>Ground floor,<br />SAC Building, IIT Roorkee<br />Roorkee, Uttarakhand, India - 247667
                                   </p>
                            </div>

                            <a style={{ textDecoration: 'none', color: '#FFF', padding: "2px" }} target="_blank" href="https://www.facebook.com/acmiitr/">
                                    <Facebook />
                            </a>
                            <a style={{ textDecoration: 'none', color: '#FFF', padding: "2px"  }} target="_blank" href="https://github.com/acmiitr/">
                                    <Github />
                            </a>
                            <a style={{ textDecoration: 'none', color: '#FFF', padding: "2px"  }} target="_blank" href="https://medium.com/@deepanshnagaria">
                                    <Medium />
                            </a>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div>
                                <div style={{ marginBottom: "8px", marginTop: "12px", fontSize: "24px" }}>
                                    <p>About Us</p>
                                </div>
                                <div style={{ marginBottom: "8px", marginTop: "12px", fontSize: "16px" }}>
                                    <p>We are a bunch of enthusiatic students who aim at uniting the computing fraternity at IIT Roorkee under one tag and allows the students to learn together and share their knowledge to cater the interests of the individuals as well as the institute as a whole. 
                                   </p>
                                </div>

                            </div>
                        </Grid>
                    </Grid>
                </div>
            </footer>
        )
    }

}

export default withStyles(styles)(FooterHome);