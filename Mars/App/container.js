import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import Title from './title.js'
import App from './app.js'




export default class Container extends Component {
    constructor(props) {
        super()
        this.state = {
            currentScreen: 'Title'

        }
    }

    render() {
        switch (this.state.currentScreen) {
            case 'Title':
                return (
                    <View style={{ flex: 1, marginTop: 0, backgroundColor: '#111111' }}>
                        <Title navHandler={this.navHandler.bind(this)} />
                    </View>
                )
                break;
            case 'App':
                return (
                    <View style={{ flex: 1, marginTop: 0, backgroundColor: '#111111' }}>
                        <App navHandler={this.navHandler.bind(this)} />
                    </View>
                )
                break;
            case 'item':
                return (
                    <View style={{ flex: 1, marginTop: 0, backgroundColor: '#111111' }}>
                        <App navHandler={this.navHandler.bind(this)} />
                    </View>
                )
                break;
            default:
                break;
        }
    }

    navHandler(newScreen) {
        this.setState({ currentScreen: newScreen })
    }

}