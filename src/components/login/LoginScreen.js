import React, { Component } from 'react';
//import {firebaseRef} from './Firebase';
import Logo from './logo';
import LoginPannel from './loginPannel'
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,AsyncStorage,ScrollView } from 'react-native';




export default class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            logoAnimation: false
        }
        this.showLogin = this.showLogin.bind(this);
    }
    static navigationOptions = {
        title:'Welcome'
    }
   
   
    showLogin=()=>{
        this.setState({
            logoAnimation: true
        })
    }
    render(){
 
        return(
            <View style={styles.container}>
            <Logo 
            showLogin={this.showLogin}
            />
            <LoginPannel 
              show={this.state.logoAnimation}
              navigation={this.props.navigation.navigate('home')}/>
            </View>
        )
    }
    }
const styles = StyleSheet.create({
    container: {
   
        flex: 1,
         alignItems: 'center',
         backgroundColor: 'red',
         opacity:1,
         justifyContent:'center'
    },
   
})