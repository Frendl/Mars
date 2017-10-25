import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    StatusBar,
    Modal,
    TouchableHighlight
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
            solDate: props.solDate,
            modalVisible: props.modalVisible,
        }
    }


/*
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
*/

    setModalVisible(visible) {
        console.log("OptionsModalVisibility", visible)
        this.setState({ modalVisible: visible })
        this.props.onModal(visible)
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
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                    style={{ flex: 1, marginTop: 0, backgroundColor: '#111111', opacity: .5 }}
                >
                    <View>
                        <View>
                            <Sol solDate={this.state.solDate} onChange={this.newSolDate.bind(this)} />
                            <CamPicker camera={this.state.camera} onChange={this.newCamera.bind(this)} />
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}