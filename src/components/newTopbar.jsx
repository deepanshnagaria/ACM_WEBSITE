import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const logo = require('../assets/logo.svg');

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
          [theme.breakpoints.down('sm')]: {
          }
        }
  })

class TopbarNew extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{position: 'sticky', top:'0', alignItems:'center', width:'100%' , backgroundColor: 'white' ,zIndex: '99'}}> 
            <Navbar expand="lg" sticky="top" className={classes.layout} >
                <Navbar.Brand href="/"  >
                    <img src={logo} alt="/" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav  variant="TAB">
                        <Nav.Item><Nav.Link href="/projects" eventKey="1" style={{paddingLeft: "16px", paddingRight: "16px"}}>PROJECTS</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/blogs" eventKey="2"style={{paddingLeft: "16px", paddingRight: "16px"}}>BLOGS</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/team" eventKey="3" style={{paddingLeft: "16px", paddingRight: "16px"}}>TEAM</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            </div>
        );
    }
}

export default withStyles(styles)(TopbarNew);