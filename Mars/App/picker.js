//Change this document name globally to Camera, or somehting like that.

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Picker
} from 'react-native';

export default class CamPicker extends Component {
    constructor(props) {
        super()
        this.state = {
            camera: props.camera
        };
    }

    handleValueChange(itemValue) {
        console.log("ItemCamValue ", itemValue)
        this.setState({ camera: itemValue })
        this.props.onChange(itemValue)
    }

    render() {
        return (
            <View style={{ flex: 0, height: 175 }}>
                <Picker itemStyle={{ color: 'white' }}
                    selectedValue={this.state.camera}
                    onValueChange={this.handleValueChange.bind(this)}>
                    <Picker.Item color='white' label="All Cameras" value="" />
                    <Picker.Item color='white' label="Front Hazard Avoidance Camera" value="FHAZ" />
                    <Picker.Item color='white' label="Navigation Camera" value="NAVCAM" />
                    <Picker.Item color='white' label="Mast Camera" value="MAST" />
                    <Picker.Item color='white' label="Chemistry and Camera Complex" value="CHEMCAM" />
                    <Picker.Item color='white' label="Mars Hand Lens Imager" value="MAHLI" />
                    <Picker.Item color='white' label="Mars Descent Imager" value="MARDI" />
                    <Picker.Item color='white' label="Rear Hazard Avoidance Camera" value="RHAZ" />
                </Picker>
            </View>
        );
    }
}

/*
order() {
    <View style={{ flex: 0, height: 200 }}>
        <Picker itemStyle={{ color: 'white' }}
            selectedValue={this.state.NASAAPI.camera}
            onValueChange={(itemValue, itemIndex) => this.setState({ Camera: itemValue })}>
            <Picker.Item color='white' label="Front Hazard Avoidance Camera" value="FHAZ" />
            <Picker.Item color='white' label="Navigation Camera" value="NAVCAM" />
        </Picker>
    </View>
}


<Picker.Item color='white' label="Mast Camera" value="MAST" />
    <Picker.Item color='white' label="Chemistry and Camera Complex" value="CHEMCAM" />
    <Picker.Item color='white' label="Mars Hand Lens Imager" value="MAHLI" />
    <Picker.Item color='white' label="Mars Descent Imager" value="MARDI" />
    <Picker.Item color='white' label="Rear Hazard Avoidance Camera" value="RHAZ" />


{ name: '', fullName: 'All Cameras' },
{ name: 'FHAZ', fullName: 'Front Hazard Avoidance Camera' },
{ name: 'NAVCAM', fullName: 'Navigation Camera' },
{ name: 'MAST', fullName: 'Mast Camera' },
{ name: 'CHEMCAM', fullName: 'Chemistry and Camera Complex' },
{ name: 'MAHLI', fullName: 'Mars Hand Lens Imager' },
{ name: 'MARDI', fullName: 'Mars Descent Imager' },
{ name: 'RHAZ', fullName: 'Rear Hazard Avoidance Camera' },

*/