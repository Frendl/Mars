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
            MarsImages: [],
            itemTapped: props.itemTapped
        }
    }


    SendImage(TappedImage) {
        console.log("TappedImage", TappedImage)
        this.setState({ itemTapped: TappedImage })
        this.props.TappedImage(TappedImage)
    }


    /*
        componentDidMount() {
            this.refetchPhotos()
        }
        //Fix all of this! I do not see the reason for all these copy functions being in this component. THey aren't even connected to anything.
    
        refetchPhotos() {
            NASAAPI.fetchPhotos(this.state.camera, this.state.solDate, (json) => {
                this.setState({ MarsImages: json.photos })
            })
        }
    
        newCamera(newCamera) {
            this.setState({ camera: newCamera }, () => {
                this.refetchPhotos()
            })
        }
    
        newSolDate(newSolDate) {
            this.setState({ solDate: newSolDate }, () => {
                this.refetchPhotos()
            })
        }
    */

    render() {
<<<<<<< HEAD
        console.log(this)
=======
>>>>>>> parent of d53fbe9... Add more function to tappable item
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
<<<<<<< HEAD
=======
                TappedImage={this.SendImage.bind(this)}
>>>>>>> parent of d53fbe9... Add more function to tappable item
            // A function call here?
            />
        )
    }
}
