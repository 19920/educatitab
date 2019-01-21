import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

const Input = (props) =>{
    let template= null;
    switch(props.type){
        case 'textinput':
        template=
        
        <TextInput 
        {...props}
        style={[styles.input,props.overrideStyle]} 
        />
       
        break;
        default:
        return template
    }
    return template

}

const styles = StyleSheet.create({
    input:{
        borderColor:'black',
        borderWidth:2,
        height:40
    }
   
})

export default Input;