import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Text
} from 'react-native';


export default class TappedItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemTapped: props.itemTapped
        }
    }

    itemTap(FullScreen) {
        console.log("TappedImage", FullScreen)
        this.setState({ itemTapped: FullScreen })
        this.props.onItemTap(FullScreen)
    }
    // Fix the above to work with the system described in the log (for TappedItem, not Item)


    render() {
        let uri = this.props.item.item.img_src
        uri = uri.replace("http", "https")
        return (
            <TouchableOpacity
                //change  this to it's apropriete thing
                onPress={() => { this.itemTap(!this.state.itemTapped) }}
                style={{ flex: 1, marginTop: 0 }}
            >
                <Image
                    style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}
                    cover={Image.resizeMode.contain}
                    source={{ uri: uri }}
                />
            </TouchableOpacity>
        );
    }
}