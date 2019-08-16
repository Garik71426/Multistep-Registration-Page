import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'

import RegistrationHead from './RegistrationHead';
import GeneralInfo from './steps/GeneralInfo';
import PackageInfo from './steps/PackageInfo';
import CardInfo from './steps/CardInfo';
import Respons from './steps/Respons';

import Messages from './../Messages.js'

import './../assets/stylesheets/Registration.css'

@observer
class Registration extends Component {
    static contextTypes = {
        RegistartionStore : PropTypes.shape({
            activeStep : PropTypes.number,
        }).isRequired
    }
    render() {
        const {activeStep} = this.context.RegistartionStore;
        let RegistrationPage,
            activeStepHeadInfo;
        switch(activeStep){
            case 1:
                RegistrationPage = <GeneralInfo/>;
                activeStepHeadInfo = Messages.generalInfo.headInfo;
                break;
            case 2:
                RegistrationPage = <PackageInfo/>;
                activeStepHeadInfo = Messages.packageInfo.headInfo;
                break;
            case 3:
                RegistrationPage = <CardInfo/>;
                activeStepHeadInfo = Messages.cardInfo.headInfo;
                break;
            case 4:
                RegistrationPage = <Respons/>;
                activeStepHeadInfo = Messages.respons.headInfo;
                break;
            default:
                return;
        }
    return (
        <div className = "Registration">
            <RegistrationHead activeStepHeadInfo = {activeStepHeadInfo}/>
            {RegistrationPage}
        </div>
        );
    }
}

export default Registration;