import React, { Component } from 'react';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';

import RegistartionStore from './stores/RegistartionStore';

import Registration from './components/Registration';

import './assets/stylesheets/App.css'

class App extends Component {
    static childContextTypes = {
        RegistartionStore : PropTypes.object
    }
    RegistartionStore = new RegistartionStore();
    getChildContext (){
        return {
            RegistartionStore : this.RegistartionStore,
        }
    }
    render() {
    return (
        <div className = "App">
            <Registration/>
        </div>
        );
    }
}

export default App;
