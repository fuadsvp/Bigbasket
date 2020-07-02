import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('../images/logo.png')}>
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(132, 194, 37)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 60,
        height: 70,
    }
})