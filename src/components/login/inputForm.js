import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

const Input = (props) =>{
    let template= null;
    switch(props.type){
        case 'textinput':
        template=
        
        <TextInput 
        {...props}
        style={styles.input} 
        />
       
        break;
        default:
        return template
    }
    return template

}

const styles = StyleSheet.create({
    input:{
        marginTop:10

       
    }
   
})

export default Input;