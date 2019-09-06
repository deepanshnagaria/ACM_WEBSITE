import React from 'react';
import {withRouter} from 'react-router-dom';

class Chat extends React.Component {
    render() {
        return (
            <frameset rows="100%">
                <frameset cols="100%">
                    <frame src="https://mdgchat.herokuapp.com/" frameborder="0" scrolling="no" />
                </frameset>
            </frameset>
        );
    }
}

export default withRouter(Chat)