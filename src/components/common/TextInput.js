import React from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';

export const TextInputs = (props) => {
  return (
    <View>
      
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputs}>
      <TextInput 
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      value={props.value}
      onChangeText={props.onChangeText}
      autoFocus={props.autoFocus}

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
          alignItems:'stretch'
        
          
  },
  label:{
    fontSize:20
  },

})




