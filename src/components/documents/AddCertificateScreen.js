import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';


export default class AddCertificateScreen extends Component {
    constructor(props){
        super(props)
        this.onChangeText = this.onChangeText.bind(this);
    }
  render() {
    return (
      <View>
          <TextInput 
          placeholder='title'
          onChangeText={this.onChangeText}/>

      </View>
        
    )
  }
}
