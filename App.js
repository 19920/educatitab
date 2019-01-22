

import React, {Component} from 'react';

import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';
import {Platform, StyleSheet, Text, View,TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/components/home/HomeScreen';
import LoginScreen from './src/components/login/LoginScreen';
import LoginForm from './src/components/login/loginForm';
import DiplomaScreen from './src/components/documents/DiplomaScreen';
import CertificateScreen from './src/components/documents/CertificateScreen';
import TestScreen from './src/components/documents/Test';
import ProfileScreen from './src/components/profile/ProfileScreen';
import MycvScreen from './src/components/documents/MyCv';
import loginForm from './src/components/login/loginForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
    
      <AppSwitchNavigator />
        
      </View>
    );
  }
}
const AppNav = createStackNavigator({
  login:{
    screen:LoginScreen
  },
  loginForm:{
    screen:LoginForm
  },
  profile:{
    screen:ProfileScreen
  }
})
const myTestsNav = createStackNavigator({
  home:{
    screen:HomeScreen,
    title:'Home'
  },
  test:{
    screen:TestScreen
  },
  diploma:{
    screen:DiplomaScreen
  },
  certificate:{
    screen:CertificateScreen
  }, 
   profile:{
    screen:ProfileScreen
  }
})
const AppTabNavigator = createBottomTabNavigator({
  home:{
    screen:myTestsNav,
    title:'Home',
    
  },
  profile:{
    screen:ProfileScreen,
    title:'Profile',
    navigationOptions:({navigation})=>({
      tabBarIcon:({tintColor})=>(
        <Icon name ='person' size={24}/>
      )
    })
  },
 
})
const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen:AppTabNavigator,
    navigationOptions:({navigation})=>({
      headerLeft:(
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <View style={{paddingHorizontal:10}}>
        <Icon name='md-menu' size={24} />
        </View>
        </TouchableOpacity>

      )
    })
  }
})
const AppDrawerNavigator = createDrawerNavigator({
  menu:{
    screen:AppTabNavigator
  },
  home:{
    screen:AppStackNavigator
  }
})
const AppSwitchNavigator = createSwitchNavigator({
  Login:{
    screen: AppNav
  },
  App:{
    screen:AppDrawerNavigator
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#FF0000',
   
  }

});
