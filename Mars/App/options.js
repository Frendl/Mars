import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    StatusBar
} from 'react-native';


import NASAAPI from './api.js'
import Sol from './sol.js'
import CamPicker from './picker.js'
import List from './list.js'


//let SolDate = '103'
//let Camera = 'MAST'


export default class Options extends Component {
    constructor(props) {
        super()
        this.state = {
            camera: props.camera,
            solDate: props.solDate

        }
    }


    newCamera(newCamera) {
        console.log("ItemValueInOpts ", newCamera)
        this.setState({ camera: newCamera })
        this.props.onCamChange(newCamera)
    }

    newSolDate(newSolDate) {
        console.log("ItemSolInOpts ", newSolDate)
        this.setState({ solDate: newSolDate })
        this.props.onSolChange(newSolDate)
    }

    /*
        refetchPhotos() {
            app.refetchPhotos(this.state.camera, this.state.solDate)
        }
    
    
        newCamera(newCamera) {
            this.setState({ camera: newCamera }, () => {
                this.props.refetchPhotos()
            })
        }
    
        newSolDate(newSolDate) {
            this.setState({ solDate: newSolDate }, () => {
                this.props.refetchPhotos()
            })
        }
    */


    render() {
        return (
            <View style={{ flex: 1, marginTop: 0, backgroundColor: '#111111', opacity: .5 }}>
                <Sol solDate={this.state.solDate} onChange={this.newSolDate.bind(this)} />
                <CamPicker camera={this.state.camera} onChange={this.newCamera.bind(this)} />
            </View>
        );
    }
}