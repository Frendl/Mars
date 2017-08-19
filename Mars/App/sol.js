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

    handleValueChange(itemValue) {
        console.log("ItemValue ", itemValue)
        this.setState({ solDate: itemValue })
        this.props.onChange(itemValue)
    }

    render() {
        return (
            <TextInput
            style={{height: 30, borderColor: 'white', borderWidth: 1, color: 'white'}}
            onChangeText={(solDate) => this.setState({solDate})}
            value={this.state.solDate}
            />
        );
    }
    
}