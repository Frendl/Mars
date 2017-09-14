import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';



export default class Title extends Component {
    render() {
        return (
            <View>
                <Text>
                    Mars
                </Text>
                <Text>
                    Press
                </Text>
                <Text>
                    A NASA Rover mission
                </Text>
            </View>
        );
    }
}

styles = StyleSheet.create({
    page: {
        flex: 1
    },
    planet: {
        flex: 1,
        alignItems: 'center',
        width: 50, height: 50
    },
    text: {
        flexDirection: 'row'
    }
})

/*

                <Image style={styles.planet}
                    source={require('./img/mars-globe-valles-marineris-enhanced.png')}
                />

*/