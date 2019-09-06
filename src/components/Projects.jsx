import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Topbar from "./newTopbar"
import Footer from "./Footer/FooterHome"
import ProjectPage from "./projects/ProjectPage"


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(940 + theme.spacing.unit * 3 * 2)]: {
          width: 1040,
          marginTop: '40px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      }
})


class Projects extends React.Component{

 
    render(){
        const {classes} = this.props;
        return(
            <React.Fragment>
                 <Topbar/>
                 <CssBaseline/>
                    <main className={classes.layout}>
                        <ProjectPage/>
                    </main>
                <Footer />                 
            </React.Fragment>
        );
    }

}


export default withRouter(withStyles(styles)(Projects));

