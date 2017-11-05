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
            itemTapped: false,
            Image: []
        }
    }

    SendImage(TappedImage) {
        console.log("TappedImage", TappedImage)
        this.setState({ itemTapped: TappedImage })
        this.props.TappedImage(TappedImage)
    }
    // Fix the above to work with the system described in the log


    render() {
        let uri = this.props.item.item.img_src
        uri = uri.replace("http", "https")
        return (
            <TouchableOpacity
                //change  this to it's apropriete thing
                onPress={() => { this.SendImage(this.uri) }}
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