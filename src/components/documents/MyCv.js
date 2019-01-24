import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class MycvScreen extends Component{
    static navigationOptions ={
        title:'MyCv',
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
                <Text>MycvScreen Page</Text>
            </View>
        )
    }
}