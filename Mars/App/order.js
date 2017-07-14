import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Picker
} from 'react-native';

export default class Order extends Component {
    Constructor(props) {
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex:0, height: 200 }}>
                <Picker itemStyle={{color:'white'}}
                    selectedValue={this.Camera}
                    onValueChange={(itemValue, itemIndex) => this.setState({ Camera: itemValue })}>
                    <Picker.Item color= 'white' label="Front Hazard Avoidance Camera" value="FHAZ" />
                    <Picker.Item color= 'white' label="Navigation Camera" value="NAVCAM" />
                </Picker>
            </View>
        );
    }
}               