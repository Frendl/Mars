//Connect as the solDate component.

import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput 
} from 'react-native';


export default class Sol extends Component {
    constructor(props) {
        super()
        this.state = {
            solDate: props.solDate
        };
    }

    handleValueChange(value) {
        console.log("ItemValue ", value)
        this.setState({ solDate: value })
        this.props.onChange(value)
    }

    render() {
        return (
            <TextInput
            style={{height: 30, borderColor: '#111111', borderWidth: 1, color: 'white'}}
            onChangeText={(this.handleValueChange.bind(this))}
            value={this.state.solDate}
            />
        );
    }

}