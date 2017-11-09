import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    StatusBar,
    Modal,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';



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
            backButton: 'Press!'
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
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                >
                    <BlurView
                        style={styles.absolute}
                        //viewRef={this.state.viewRef} <- For android support only
                        blurType="dark"
                        blurAmount={1}
                    />
                    <View style={styles.inModalView}>
                        <Text style={styles.backButtonStyle}>
                            {this.state.backButton}
                        </Text>
                        <Sol solDate={this.state.solDate} onChange={this.newSolDate.bind(this)} />
                        <CamPicker camera={this.state.camera} onChange={this.newCamera.bind(this)} />
                        <TouchableHighlight
                            onPress={() => { this.setModalVisible(!this.state.modalVisible) }}
                            style={{ alignItems: 'flex-start', justifyContent: 'flex-end', marginLeft: 10, }}>
                            <Text style={styles.hideModalStyle}>
                                Hide Modal
                            </Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
                    <View style={{ alignItems: 'flex-start', marginLeft: 10, }}>
                        <TouchableOpacity
                            onPress={() => { this.setModalVisible(true) }}
                            style={{ flex: 0, height: 25 }}>
                            <Text style={{ color: 'white' }}>
                                Open Modal!
                        </Text>
                        </TouchableOpacity>
                    </View>
            </View>
                );
    }
}


let styles = StyleSheet.create({
    absolute: {
        // backgroundColor: '#ff007040' ,
        position: "absolute",
        flex: 1,
        top: 0, left: 0, bottom: 0, right: 0,
    },
    hideModalStyle: {
        color: 'white',
        bottom: 5
    },
    inModalView: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        top: 0, left: 0, bottom: 0, right: 0,
    },
    backButtonStyle: {
        flex:0,
        color: 'white',
        marginTop: 50,
        backgroundColor: 'red'
    }
});