import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';


export default class Title extends Component {
    render() {
        return (
            <View style={styles.page}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.Title}>
                    Mars
                </Text>
                <TouchableOpacity style={styles.circle} onPress={this._onPressButton}>
                    <Image
                        style={styles.planet}
                        //source={{uri: './img/Mars.jpg' }}
                        source={require('./img/Mars.jpg')}
                    />
                </TouchableOpacity>
                <Text style={styles.action}>
                    Press
                </Text>
                <Text style={styles.bottom}>
                    A NASA Rover mission
                </Text>
            </View>
        );
    }
}

styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: 'black'
    },
    planet: {
        alignItems: 'center',
        flexDirection: 'row',
        width: 300,
        height: 300

    },
    circle: {
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        backgroundColor: '#EE4A4A'
    },
    Title: {
        fontSize: 70,
        marginTop: 70,
        flexDirection: 'row',
        color: '#EE4A4A'
    },
    action: {
        fontSize: 10,
        marginTop: 5,
        flexDirection: 'row',
        color: '#EE4A4A'
    },
    bottom: {
        fontSize: 18,
        marginBottom: 22,
        flexDirection: 'row',
        color: '#EE4A4A'
    }
})


/*
let colors = {
    Space: '#EE4A4A'
}



                <Image style={styles.planet}
                    source={require('./img/mars-globe-valles-marineris-enhanced.png')}
                />

*/