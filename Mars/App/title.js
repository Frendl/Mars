import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';
import { BlurView } from 'react-native-blur';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const myIcon = (<Icon name="rocket" size={45} color="white" />)


export default class Title extends Component {
    constructor(props) {
        super()
        this.state = {
            marsImageSize: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.decay(this.state.marsImageSize, {
            toValue: 300,
            duration: 10000
        }).start();
    }


    navHandler() {
        this.props.navHandler("App")
    }


    render() {
        return (
            <View style={styles.page}>
                <StatusBar barStyle="light-content" />
                <View>
                    <Text style={styles.Title}>
                        Mars
                    </Text>
                </View>
                <Animated.View style={{...this.props.style, width: this.state.marsImageSize, height: this.state.marsImageSize }}>
                    <TouchableWithoutFeedback style={styles.circle} onPress={this.navHandler.bind(this)}>
                        <View style={styles.circle}>
                            <Image
                                style={styles.planet}
                                //source={{ uri: './img/Mars.jpg' }}
                                source={require('./img/Mars.jpg')}
                            />
                            <Text style={styles.Paragraph}>
                                Press Mars
                    </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </Animated.View>
            </View>
        );
    }
}

styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: 'black'
    },
    circle: {
        width: 300,
        height: 300,
//        borderRadius: 300 / 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'black',
    },
    planet: {
        flexDirection: 'absolute',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
//        borderRadius: 1 / 2,
//        position: "absolute",
//        top: 0, left: 0, bottom: 0, right: 0,
    },
    TitleFrame: {

    },
    Title: {
        fontSize: 70,
        marginBottom: 77,
        flexDirection: 'row',
        color: '#EE4A4A'
    },
    Paragraph: {
        fontSize: 15,
        color: '#EE4A4A',
        backgroundColor: '#FFFFFF00',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
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
    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
})


/*

                <Text style={styles.Title}>
                    Mars
                </Text>

                <Text style={styles.bottom}>
                    The NASA Mars Rover missions
                </Text>


let colors = {
    Space: '#EE4A4A'
}



                <Image style={styles.planet}
                    source={require('./img/mars-globe-valles-marineris-enhanced.png')}
                />

*/