import React, { Component } from 'react'
import {View,TextInput,Text,StyleSheet} from 'react-native';

export const PasswordInput = (props) => {
  return (
        <View>
        <Text style={styles.label}>{props.label}</Text>
         <View style={styles.inputs}>
          <TextInput 
          ref={props.refs}
          style={styles.textInput}
          type='password'
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          secureTextEntry
          
          />
          </View >
         

      </View>
        
   
    )
  }


const styles = StyleSheet.create({
  inputs:{
         width:300,
          height:40,
          borderWidth:2,
          borderColor:'#ADD8E6',
          backgroundColor:'white',
          color:'black',
          textAlign:'center',
          justifyContent:'center',
          borderRadius:10,
          marginRight:10,
          marginLeft:10,
          marginTop:5
  },
  label:{
    fontSize:20,
    marginLeft:10,
    marginRight:10
  },
  textInput:{
    textAlign:'auto',
    fontSize:18,
    marginLeft:5,
    paddingTop:5,
  }
})
