import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Topbar from "../newTopbar"
import Footer from "../Footer/FooterHome"
import ProjectDetailPage from "./ProjectDetailPage"


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
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      }
})


class ProjectDetail extends React.Component{
    
    render(){
        const {classes} = this.props;
        return(
            <React.Fragment>
                 <Topbar/>
                 <CssBaseline/>
                    <main className={classes.layout}>
                        <ProjectDetailPage index={this.props.index}/>
                    </main>
                <Footer />                 
            </React.Fragment>
        );
    }

}


export default withRouter(withStyles(styles)(ProjectDetail));


