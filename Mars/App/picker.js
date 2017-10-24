import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    StatusBar
} from 'react-native';

import Item from './item.js'
import Order from './order.js'
import NASAAPI from './api.js'
import Sol from './sol.js'


//let SolDate = '103'
//let Camera = 'MAST'


export default class Picker extends Component {
    constructor(props) {
        super()
        this.state = {
            camera: 'FHAZ',
            solDate: '1000'
        }
    }


    componentDidMount() {
        this.refetchPhotos()
    }

    refetchPhotos() {
        NASAAPI.fetchPhotos(this.state.camera, this.state.solDate, (json) => {
            this.setState({ MarsImages: json.photos })
        })
    }

    newCamera(newCamera) {
        this.setState({ camera: newCamera }, () => {
            this.refetchPhotos()
        })
    }

    newSolDate(newSolDate) {
        this.setState({ solDate: newSolDate }, () => {
            this.refetchPhotos()
        })
    }


    render() {
        return (
                <View style={{ flex: 1, marginTop: 0, backgroundColor: '#111111' }}>
                    <StatusBar barStyle="light-content" />
                    <Sol solDate={this.state.solDate} onChange={this.newSolDate.bind(this)} />
                    <Order camera={this.state.camera} onChange={this.newCamera.bind(this)} />
                </View>
        );
    }
}