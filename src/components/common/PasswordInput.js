import React, { Component } from 'react'
import {View,TextInput,Text,StyleSheet} from 'react-native';

export default class PasswordInput extends Component {
    constructor(props){
        super(props)
    }
    
  render() {
      const{errors,name,label,placeholder,value,onChangeText } = this.props;
    return (
        <View>
        <Text style={styles.label}>{label}</Text>
         <View style={styles.inputs}>
          <TextInput 
          type='password'
          name={name}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry
          
          />
          </View >
         
          <Text>{errors}</Text>

      </View>
        
   
    )
  }
}

const styles = StyleSheet.create({
  inputs:{
         width:300,
          height:40,
          borderWidth:2,
          borderColor:'black',
          backgroundColor:'white',
          color:'black',
          textAlign:'center',
          
  },
  label:{
    fontSize:20
  },
  title:{
    backgroundColor:'red'
  }
})
