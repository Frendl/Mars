import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Text
} from 'react-native';

import TappedItem from './tappedItem.js'

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    // Fix the above to work with the system described in the log
    onItemPress() {
        const imageTappedFromList = this.props.item.item
        const switchValue = true
        console.log("Pressed Item Data:", imageTappedFromList)
        this.props.tapImageFunction(imageTappedFromList)
        this.props.fullScreenSwitch(switchValue)
    }


    render() {
        let uri = this.props.item.item.img_src
        uri = uri.replace("http", "https")
        console.log(this)
        return (
            <TouchableOpacity
                //change  this to it's apropriete thing
                //onPress={() => { this.props.item.item }}
                //this.Item.props.item.item <-- this is the item you want.
                onPress={this.onItemPress.bind(this)}
                style={{ flex: 1, height: 300 }}
            >
                <Image
                    style={{ flex: 1, height: 300, backgroundColor: 'black' }}
                    cover={Image.resizeMode.contain}
                    source={{ uri: uri }}
                />
                <Text style={{ color: 'white' }}> {this.props.item.item.id} </Text>
            </TouchableOpacity>
        );
    }
}