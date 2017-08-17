import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Picker
} from 'react-native';

export default class Order extends Component {
    constructor(props) {
        super()
        this.state = {
            camera:props.camera
        };
    }

    handleValueChange(itemValue){
        console.log("ItemValue ",itemValue)
        this.setState({ camera: itemValue })
        this.props.onChange(itemValue)
    }

    render() {
        return (
            <View style={{ flex: 0, height: 200 }}>
                <Picker itemStyle={{ color: 'white' }}
                    selectedValue={this.state.camera}
                    onValueChange={this.handleValueChange.bind(this)}>
                    <Picker.Item color='white' label="Front Hazard Avoidance Camera" value="FHAZ" />
                    <Picker.Item color='white' label="Navigation Camera" value="NAVCAM" />
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
*/