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
<<<<<<< HEAD
<<<<<<< HEAD
=======
        const switchValue = true
>>>>>>> parent of d63aae1... Make Images Tappable to a full screen view, add minor Styling
        console.log(this)
        return (
            <TouchableOpacity
                //change  this to it's apropriete thing
                //onPress={() => { this.props.item.item }}
                //this.Item.props.item.item <-- this is the item you want.
<<<<<<< HEAD
                onPress={this.onItemPress.bind(this)}
=======
        return (
            <TouchableOpacity
                //change  this to it's apropriete thing
                onPress={() => { this.SendImage(this.uri) }}
>>>>>>> parent of d53fbe9... Add more function to tappable item
=======
                onPress={() => {
                    this.props.tappedImage(this.props.item.item),
                        this.props.fullScreenSwitch(switchValue)
                }}
>>>>>>> parent of d63aae1... Make Images Tappable to a full screen view, add minor Styling
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