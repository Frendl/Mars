import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    TouchableWithoutFeedback,
    Animated,
    Easing
} from 'react-native';
import { BlurView } from 'react-native-blur';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const myIcon = (<Icon name="rocket" size={45} color="white" />)


export default class Title extends Component {
    constructor(props) {
        super()
        this.state = {
            marsImageSize: new Animated.Value(0),
            marsTitleTransparencyFade: new Animated.Value()
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.marsImageSize,
            {
                toValue: 300,
                duration: 5000,
                easing: Easing.linear
            }
        ).start();
    }


    navHandler() {
        this.props.navHandler("App")
    }


    render() {
        return (
            <View style={styles.page}>
                <StatusBar barStyle="light-content" />
                <Text style={{
                    fontSize: 70,
                    marginTop: 70,
                    flexDirection: 'row',
                    color: '#EE4A4A',
                }}>
                    Mars
                    </Text>
                <TouchableWithoutFeedback style={styles.circle} onPress={this.navHandler.bind(this)}>
                    <Animated.View style={{ ...this.props.style }}>

                        <Animated.Image
                            style={{ width: this.state.marsImageSize, height: this.state.marsImageSize }}
                            //source={{ uri: './img/Mars.jpg' }}
                            source={require('./img/Mars.jpg')}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <View style={styles.BottomViewStyle} />
            </View>
        );
    }
}

styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: 'black'
    },
    circle: {
        width: 300,
        height: 300,
        //        borderRadius: 300 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        position: 'absolute'
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
        //        fontSize: 70,
        //        marginBottom: 77,
        //        flexDirection: 'row',
        //        color: '#EE4A4A'
    },
    BottomViewStyle: {
        marginBottom: 70,
        flexDirection: 'row',
        //        color: 'red'
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