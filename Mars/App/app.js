import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    StatusBar,
    TouchableHighlight,
    Modal,
    Button
} from 'react-native';

import Item from './item.js'
import Order from './order.js'
import NASAAPI from './api.js'
import Sol from './sol.js'


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


    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                >
                    <View style={{ marginTop: 22 }}>
                        <Sol solDate={this.state.solDate} onChange={this.newSolDate.bind(this)} />
                        <Order camera={this.state.camera} onChange={this.newCamera.bind(this)} />
                        <Button
                            onPress={setModalVisible()}
                            title="Close"
                            color="#222222"
                            accessibilityLabel="Close this modal with options to show the list of photos picked below."
                        />
                    </View>
                </Modal>
                <StatusBar barStyle="light-content" />
                <Button
                    onPress={setModalVisible()}
                    title="Photo options"
                    color="#999999"
                    accessibilityLabel="Open the Modal for more photo list options."
                />
                <FlatList
                    keyExtractor={item => item.id}
                    data={this.state.MarsImages}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }

    renderItem(item) {
        return (
            <Item item={item} />
        )
    }
}