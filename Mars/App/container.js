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
            CurrentScreen: 'title'

        }
    }

    newScreen(newCamera) {
        this.setState({ camera: newCamera }, () => {
            this.refetchPhotos()
        })
    }



    render() {
        return (
            <this.state.currentScreen />
        );
    }
}