import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Topbar from "./Topbar"
import Footer from "./Footer/Footer"
import ProjectPage from "./projects/ProjectPage"
import BlogsPage from "./blog/BlogPage"
//import { isMainThread } from 'worker_threads';

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
          width: 940,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      }
})


class Sample extends React.Component{

 
    render(){
        const {classes} = this.props;
        return(
            <React.Fragment>
                 <Topbar/>
                 <CssBaseline/>
                    <main className={classes.layout}>
                        <Typography>Lorem Ipsum Lorem</Typography>
                    </main>
                <Footer />                 
                
            </React.Fragment>
        );
    }

}


export default withRouter(withStyles(styles)(Sample));

