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

<<<<<<< HEAD
<<<<<<< HEAD
    onItemPress(){
        const switchValue = null
        this.props.fullScreenSwitch(switchValue)
    }


=======
>>>>>>> parent of d63aae1... Make Images Tappable to a full screen view, add minor Styling
    render() {
        let uri = this.props.item.item.img_src
        uri = uri.replace("http", "https")
        const switchValue = null
        console.log(this)
        return (
            <TouchableOpacity
                //change  this to it's apropriete thing
                //onPress={() => { this.props.item.item }}
                //this.Item.props.item.item <-- this is the item you want.
                onPress={() => {
                    this.props.imageTapped(this.Item.props.item.item),
                        this.props.fullScreenSwitch(switchValue)
                }}
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

/*
=======
>>>>>>> parent of d53fbe9... Add more function to tappable item
    itemTap(itemTapped) {
        console.log("TappedImage", itemTapped)
        this.setState({ itemTapped: itemTapped })
        this.props.itemTap(itemTapped)
    }
    // Fix the above to work with the system described in the log (for TappedItem, not Item)


    render() {
        let uri = this.props.itemTapped.item.img_src
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