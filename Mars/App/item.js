import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';


export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {
        let uri = this.props.item.item.img_src
        uri = uri.replace("http", "https")
        return (
            <View style={{ flex: 1, height:300 }}>
                <Image
                    style={{ flex: 1, height: 300, backgroundColor: 'black' }}
                    cover={Image.resizeMode.contain}
                    source={{ uri: uri }}
                />
                <Text> {this.props.item.item.id} </Text>
            </View>
        );
    }
}