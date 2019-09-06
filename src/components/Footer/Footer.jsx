import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core';
import "./footer.css"
const styles = theme => {

   
}

class Footer extends React.Component{
    
    render(){
        return(
            <footer className="Footer">
                   2019 {'\u00A9'} ACM(Association of Computing Machinery) IITR
            </footer>
        )
    }
   
}

export default Footer;