import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    StatusBar
} from 'react-native';

import Item from './item.js'
import Order from './order.js'


//let SolDate = '103'
//let Camera = 'MAST'


export default class App extends Component {
    constructor(props) {
        super()
        this.state = {
            MarsImages: [],
            Pull: {
                Camera: '',
                SolDate: '103'
            }
//            Camera: 'MAST',
//            SolDate: '103'
        }

    }
    componentDidMount() {
        //let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + '999' + 'MAST' + '&api_key=' + 'a1vxn94JAg11UtnooLxGQKwbSYpk85ml24xtqYAB'
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + this.state.Pull.SolDate + this.state.Pull.Camera + '&api_key=' + 'a1vxn94JAg11UtnooLxGQKwbSYpk85ml24xtqYAB')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson) {
                    console.log(responseJson)
                    this.setState({ MarsImages: responseJson.photos })
                    // store.raw = responseJson.raw
                }
            })
            .catch((error) => {
                console.error(error)
            });
        // this is a Promise, learn it. Fetch is also explained in the react native doc.
    }

    order() {
        <View style={{ flex: 0, height: 200 }}>
            <Picker itemStyle={{ color: 'white' }}
                selectedValue={this.state.Pull.Camera}
                onValueChange={(itemValue, itemIndex) => this.setState({ Camera: itemValue })}>
                <Picker.Item color='white' label="Front Hazard Avoidance Camera" value="FHAZ" />
                <Picker.Item color='white' label="Navigation Camera" value="NAVCAM" />
            </Picker>
        </View>
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 20, backgroundColor: '#111111' }}>
                <StatusBar barStyle="dark-content" />
                <Order />
                <FlatList
                    keyExtractor={item => item.id}
                    data={this.state.MarsImages}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }

    renderItem(item) {
        return (
            <Item item={item}/>
        )
    }
}

