import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Animated, Easing, TouchableHighlight, } from 'react-native';
const { width } = Dimensions.get('window');




export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rotateValueHolder: new Animated.Value(0),
        };
    }

    componentDidMount() {
        console.log('Splash');
        this.startImageRotateFunction();
    }

    startImageRotateFunction() {
        //rotateValueHolder.setValue(0);
        Animated.timing(this.state.rotateValueHolder, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => {
            console.log("done");
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'HomePage' }],
            })
        });
    };

    render() {

        const degree = '360deg';
        const rotateData = this.state.rotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', degree],
        });

        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <View style={{ alignItems: 'center' }} >
                    <View style={{ width: width,  flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <Animated.Image
                            source={require('../assets/res.jpg')}
                            style={{ height: 300, width: 300,borderRadius:200,  resizeMode: 'contain', transform: [{ rotate: rotateData }], }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
