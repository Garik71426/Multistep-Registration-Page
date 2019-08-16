import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Input, Button, FormFeedback} from 'reactstrap';
import {observer} from 'mobx-react'

import Constants from './../../Constants.js'
import Messages from './../../Messages.js'

@observer
class CardInfo extends Component {
    static contextTypes = {
        RegistartionStore : PropTypes.shape({
            stepPrev : PropTypes.func,
            cardInfoChangeInput : PropTypes.func,
            userInfo : PropTypes.object,
            sendInfo : PropTypes.func,
            CardInfoCount : PropTypes.number,
            cardInfoValidate : PropTypes.bool
        }).isRequired
    }
    render() {
        const {stepPrev, cardInfoChangeInput, userInfo, cardInfoValidate,
               sendInfo, CardInfoCount} = this.context.RegistartionStore;
        const inputNames = Constants.cardInfo.inputNames;
        const inputInfo = Messages.cardInfo.inputInfo;
        const isValid = (CardInfoCount === 4) ? 'is-valid' : '';
    return (
        <div className = "RegistrationForm">
            <Form>
                <FormGroup>
                    <Input placeholder= {inputInfo.cardNumber.placeholder} name = {inputNames.cardNumber}
                        onChange = {cardInfoChangeInput} defaultValue = {userInfo.cardInfo.cardNumber}
                        className = {isValid}
                        />
                    <FormFeedback>{inputInfo.cardNumber.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder= {inputInfo.cardName.placeholder} name = {inputNames.cardName} 
                        onChange = {cardInfoChangeInput} defaultValue = {userInfo.cardInfo.cardName}
                        className = {isValid}
                        />
                    <FormFeedback>{inputInfo.cardName.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder= {inputInfo.cardCvc.placeholder} name = {inputNames.cardCvc} 
                        onChange = {cardInfoChangeInput} defaultValue = {userInfo.cardInfo.cardCvc}
                        className = {isValid}
                        />
                    <FormFeedback>{inputInfo.cardCvc.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder= {inputInfo.cardExpiration.placeholder} name = {inputNames.cardExpiration} 
                        onChange = {cardInfoChangeInput} defaultValue = {userInfo.cardInfo.cardExpiration}
                        className = {isValid}
                        />
                    <FormFeedback>{inputInfo.cardExpiration.validEror}</FormFeedback>
                </FormGroup>
                <Button onClick = {stepPrev}>Previous</Button>
                <Button disabled = {!cardInfoValidate} className = 'ml-2' onClick = {sendInfo}>Sign me up!</Button>
            </Form>
        </div>
        );
    }
}

export default CardInfo;