import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {observer} from 'mobx-react'

//import Constants from './../../Constants.js'
//import Messages from './../../Messages.js'

@observer
class Respons extends Component {
    static contextTypes = {
        RegistartionStore : PropTypes.shape({
            responseMessage : PropTypes.string,
        }).isRequired
    }
    render() {
        const {responseMessage} = this.context.RegistartionStore;
    return (
        <div className = "RegistrationForm">
            <Alert className = "respons" align = "center">
                <h1>{responseMessage}</h1>
            </Alert>
        </div>
        );
    }
}

export default Respons;