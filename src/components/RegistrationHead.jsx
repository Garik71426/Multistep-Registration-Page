import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

@observer
class RegistrationHead extends Component {
    static propTypes = {
        activeStepHeadInfo : PropTypes.object.isRequired
    }
    render() {
        const {activeStepHeadInfo} = this.props;
    return (
        <div className = "RegistrationHead">
            <div className = "headRight">
                <h3>Step {activeStepHeadInfo.step} / 4</h3>
                <p>{activeStepHeadInfo.textHead}</p>
            </div>
            <div className = "headLeft">
                <i className={activeStepHeadInfo.iconHead}></i>
            </div>
        </div>
        );
    }
}

export default RegistrationHead;