import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Picker extends Component {
    construtor() {
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ flex: 1, opacity: .2, backgroundColor: '#ffffff' }}>
                <Text style={{ marginTop: 25, fontSize: 25, backgroundColor: '#ffffff' }}>
                    Haha!!
                </Text>
            </View>
        );
    }
} 