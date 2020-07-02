/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableWithoutFeedback, Keyboard, TouchableOpacity,KeyboardAvoidingView,TextInput, Image } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

class Login extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    placeholder="Mobile Number(10-digit)/Email Address"
                                    placeholderTextColor='rgba(169,169,169,0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()} />
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>Login Using OTP</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
    )
  }
}

class Signup extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    placeholder="Mobile Number(10-digit)"
                                    placeholderTextColor='rgba(169,169,169,0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()} />
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>Signup Using OTP</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgb(50, 205, 50)',
    flexDirection: 'column'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
},
logo: {
    width: 200,
    height: 50,
    
},
title: {
    color: '#fcc744',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9

},
infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20, 
},
input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255,0.2)',
    color: '#FFFFFF',
    marginBottom: 20,
    paddingHorizontal: 10

},
buttonContainer: {
    backgroundColor: '#FF6347',
    paddingVertical: 15
},
buttonText: {
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18
}
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
  },
  <TabNavigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}>
  </TabNavigator>
);

export default createAppContainer(TabNavigator);
