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
import NASAAPI from './api.js'
import List from './list.js'
import Options from './options.js'


//let SolDate = '103'
//let Camera = 'MAST'


export default class App extends Component {
    constructor(props) {
        super()
        this.state = {
            MarsImages: [],
            //            Pull: {
            camera: 'FHAZ',
            solDate: '1000'

        }
        //            Camera: 'MAST',
        //            SolDate: '103'
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

    /*
        componentDidMount() {
            //let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + '999' + 'MAST' + '&api_key=' + 'a1vxn94JAg11UtnooLxGQKwbSYpk85ml24xtqYAB'
            fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + this.state.Pull.SolDate + this.state.Pull.Camera + '&api_key=' + 'a1vxn94JAg11UtnooLxGQKwbSYpk85ml24xtqYAB')
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    if (responseJson) {
                        console.log(responseJson)
                        this.setState({ MarsImages: responseJson.photos })
                        // store.raw = responseJson.raw
                    }
                })
                .catch((error) => {
                    console.error(error)
                });
            // this is a Promise, learn it. Fetch is also explained in the react native doc.
        }
    */


    render() {
        return (
            <View style={{ flex: 1, marginTop: 0, backgroundColor: '#111111' }}>
                <List MarsImages={this.state.MarsImages} />
                <Options
                    camera={this.state.camera}
                    solDate={this.state.solDate}
                    onSolChange={this.newSolDate.bind(this)}
                    onCamChange={this.newCamera.bind(this)}
                />
            </View>
        );
    }
}