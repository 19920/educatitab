import React from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';

export const TextInputs = (props) => {
  return (
    <View>
      
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputs}>
      <TextInput 
      ref={props.refs}
      style={styles.textInput}
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      value={props.value}
      onChangeText={props.onChangeText}
      

      />

      </View>
      
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
          textAlign:'justify',
          justifyContent:'center',
          alignItems:'stretch',
          borderRadius:10,
          marginRight:10,
          marginLeft:10,
          marginTop:10

         
        
          
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
    paddingTop:3,

   
   
  }

})




