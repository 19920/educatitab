import React, { Component } from 'react';
//import {firebaseRef} from './Firebase';
import Logo from './logo';
import LoginPannel from './loginPannel'
import axios from 'axios';
import { View, StyleSheet,} from 'react-native';




export default class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            logoAnimation: false
        }
        this.showLogin = this.showLogin.bind(this);
    }
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {
          backgroundColor: '#16a085',
          fontWeight: '300'
        },

        headerTitleStyle: {
            fontWeight: '300',
            textAlign: 'center',
            color:'white',
            flexGrow:1,
            
          
          
        }
        
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
              navigation={this.props.navigation.navigate}/>
            </View>
        )
    }
    }
const styles = StyleSheet.create({
    container: {
   
        flex: 1,
        paddingTop:20,
         alignItems: 'center',
         backgroundColor: '#D3D3D3',
         opacity:1,
         
    },
   
})