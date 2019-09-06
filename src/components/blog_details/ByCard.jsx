import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
function ByCard(props){
    return(
        <Card /* className={}  */>
        <CardActionArea >
            <CardMedia
            /* className={}  */
            image={props.image}
            title={props.cardTitle}
            />
            <CardContent>
            <h3
            style= {{
                paddingBottom: "0px",
                marginBottom: "0px"
            }}>
                {props.name}
            </h3>
            <div 
            style= {{
                marginTop: "0px",   
                paddingTop: "0px",
                color: "#707070"
            }}>
                {props.details}
            </div>
            </CardContent>
        </CardActionArea>
    </Card>
    );
}

ByCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default ByCard;
