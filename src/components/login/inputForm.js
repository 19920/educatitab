import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

const Input = (props) =>{
    let template= null;
    switch(props.type){
        case 'textinput':
        template=
        
        <TextInput underlineColorAndroid='rgba(0 0 0 0)'
        {...props}
        style={[props.overrideStyle]} 
        />
       
        break;
        default:
        return template
    }
    return template

}

const styles = StyleSheet.create({
   
})

export default Input;