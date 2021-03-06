/**
 * @format
 */
import React, { Component } from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
//import {name as appName} from './app.json';
import Splash from './components/Splash'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        console.log('Start doing some tasks for about 3 seconds')
        setTimeout(() => {
            console.log('Done some tasks for about 3 seconds')
            this.setState({ currentScreen: 'App' })

        }, 3000)
    }
    render() {
        const { currentScreen } = this.state
        let mainscreen = currentScreen === 'Splash' ? <Splash /> : <App />
        return mainscreen
    }
}

AppRegistry.registerComponent('Bigbasket', () => Main);
