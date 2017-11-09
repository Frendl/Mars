import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    StatusBar,
} from 'react-native';

import Item from './item.js'
import NASAAPI from './api.js'
import List from './list.js'
import Options from './options.js'
import TappedItem from './tappedItem.js'


//let SolDate = '103'
//let Camera = 'MAST'


export default class App extends Component {
    constructor(props) {
        super()
        this.state = {
            MarsImages: [],
            //            Pull: {
            camera: 'FHAZ',
            solDate: '1000',
            modalVisible: false,
            itemTapped: false,
            fullScreen: false,
            tappedImage: []
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

    modal(visible) {
        console.log("AppOptionsModalVisibility", visible)
        this.setState({ modalVisible: visible })
        console.log("PostActionAppOptionsModalVisibility", this.state.modalVisible)
    }

<<<<<<< HEAD
    imageTapped(imageTappedFromList) {
        console.log(imageTappedFromList)
        this.setState({ tappedItem: imageTappedFromList })
=======
    itemTap(fullScreen) {
        this.setState({ itemTapped: fullScreen })
>>>>>>> parent of d53fbe9... Add more function to tappable item
    }

    tappedImage(TappedImage) {
        this.setState({ tappedImage: TappedImage})
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
        if (this.state.itemTapped) {
            return (
                <TappedItem
                    style={{ flex: 1, marginTop: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
                    tappedItemData={this.state.tappedItem}
                    fullScreenSwitch={this.fullScreen.bind(this)}
=======
                    itemTapped={this.state.itemTapped}
                    itemTap={this.itemTap.bind(this)}
>>>>>>> parent of d53fbe9... Add more function to tappable item
=======
                    itemTapped={this.state.tappedItem}
>>>>>>> parent of d63aae1... Make Images Tappable to a full screen view, add minor Styling
                />
            )
        }
        else {
            return (
                <View style={{ flex: 1, marginTop: 0, backgroundColor: '#111111' }}>
                    <View style={{ flex: 1, marginTop: 0 }}>
                        <List
                            MarsImages={this.state.MarsImages}
<<<<<<< HEAD
<<<<<<< HEAD
                            tapImageFunction={this.imageTapped.bind(this)}
=======
                            tappedImage={this.imageTapped.bind(this)}
>>>>>>> parent of d63aae1... Make Images Tappable to a full screen view, add minor Styling
                            fullScreenSwitch={this.fullScreen.bind(this)}
                        //properties should be lower case.
=======
                            TappedImage={this.tappedImage.bind(this)}
>>>>>>> parent of d53fbe9... Add more function to tappable item
                        />
                    </View>
                    <View style={{ flex: 0, marginTop: 0 }}>
                        <Options
                            camera={this.state.camera}
                            solDate={this.state.solDate}
                            onSolChange={this.newSolDate.bind(this)}
                            onCamChange={this.newCamera.bind(this)}
                            modalVisible={this.state.modalVisible}
                            onModal={this.modal.bind(this)}
                        />
                    </View>
                </View>
            );
        }
    }
}