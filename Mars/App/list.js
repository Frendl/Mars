import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    Image
} from 'react-native';

import Item from './item.js'
import NASAAPI from './api.js'
import Sol from './sol.js'
import Picker from './picker.js'

export default class List extends Component {
    constructor(props) {
        super()
        this.state = {
        }
    }

    render() {
        console.log(this)
        return (
            <View style={{ flex: 1, marginTop: 0, backgroundColor: '#111111' }}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={this.props.MarsImages}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }

    renderItem(item) {
        return (
            <Item
                {...this.props}
                item={item}
            // A function call here?
            />
        )
    }
}