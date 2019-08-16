import {extendObservable, action, computed} from 'mobx';
import axios from 'axios';

import Validator from './../helpers/Validator';

class RegistartionStore {
    validator = new Validator();
    storeValues = {
        generalInfoCount : 0,
        CardInfoCount : 0,
        activeStep : 1,
        responseMessage : 'Waiting for the poll...',
        userInfo :{
            generalInfo : {},
            packageInfo : '',
            cardInfo : {}
        }
    }
    constructor () {
        extendObservable(this, this.storeValues);
    }
    @action
    stepNext = () => {
        this.activeStep += 1;
    }
    @action
    stepPrev = () => {
        this.activeStep -= 1;
    }
    @action
    testInput(isValid, event, count, objName){
        if(isValid){
            if(!this.userInfo[objName][event.target.name]){
                count++;
                event.target.className =  'form-control is-valid';
            }
            this.userInfo[objName][event.target.name] = event.target.value;
        }else{
            if(this.userInfo[objName][event.target.name]){
                event.target.className = 'form-control is-invalid';
                count--;
                delete this.userInfo[objName][event.target.name];
            }else if(event.target.className === 'form-control'){
                event.target.className = 'form-control is-invalid';
            }
        }
        return count;
    }
    //step1
    @computed
    get generalInfoValid(){
        return this.generalInfoCount === 7;
    }
    @action
    generalInfoChangeInput = (event) => {
        this.generalInfoCount = this.testInput(this.validator.isValid(event), event, this.generalInfoCount, "generalInfo");
    }
    //step2
    @computed
    get packageInfoValid(){
        return this.userInfo.packageInfo !== '';
    }
    packageClickRadio = (event) => {
        this.userInfo.packageInfo = event.target.value;
    }
    //step3
    @action
    cardInfoChangeInput = (event) => {
        this.CardInfoCount = this.testInput(this.validator.isValid(event), event, this.CardInfoCount, "cardInfo");
    }
    @computed
    get cardInfoValidate(){
        return this.CardInfoCount === 4;
    }
    //sendInfo
    sendInfo = () => {
        this.stepNext();
        axios.post('http://localhost:4000/serverport/add', this.userInfo)
        .then(res => {this.responseMessage = res.data})
        .catch(reject => {this.responseMessage = reject.message})
    }
}
export default RegistartionStore;