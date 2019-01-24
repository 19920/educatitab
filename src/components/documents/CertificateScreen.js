import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class CertificateScreen extends Component{
    static navigationOptions ={
        title:'My Certificates',
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
    render(){
        return(
            <View>
                <Text>CertificateScreen Page</Text>
            </View>
        )
    }
}