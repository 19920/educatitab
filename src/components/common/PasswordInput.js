import React, { Component } from 'react'
import {View,TextInput,Text,StyleSheet} from 'react-native';

export const PasswordInput = (props) => {
  return (
        <View>
        <Text style={styles.label}>{props.label}</Text>
         <View style={styles.inputs}>
          <TextInput 
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
          justifyContent:'center'
          
  },
  label:{
    fontSize:20
  },
  title:{
    backgroundColor:'red'
  }
})
