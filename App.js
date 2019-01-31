

import React, {Component} from 'react';

import {createStackNavigator,createDrawerNavigator,
  createBottomTabNavigator,createSwitchNavigator,
  DrawerItems,
} from 'react-navigation';
import {Platform, Dimensions,StyleSheet,SafeAreaView,ScrollView, Button, View,TouchableOpacity,StatusBar,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/components/home/HomeScreen';
import LoginScreen from './src/components/login/LoginScreen';
import LoginForm from './src/components/login/loginForm';
import DiplomaScreen from './src/components/documents/DiplomaScreen';
import AddCertificateScreen from './src/components/documents/AddCertificateScreen';
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

const navStyle={
  navaBarTextFontSize:20,
  navBarTextColor:'#ffffff',
  navBarTitleTextCentered:true,
  navBarBackgroundColor:'#00ADA9'
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
    
      <AppSwitchNavigator />
        
      </View>
    );
  }
}

const AppNav = createStackNavigator(
  {
  login:{screen:LoginScreen} 
}
)
const ProfileNav = createStackNavigator({
  profile:{
    screen:ProfileScreen,
    
  },
  myCV:{
    screen:MycvScreen
  }
  
})
const myTestsNav = createStackNavigator({
  home:{
    screen:HomeScreen,
      
  },
  test:{
    screen:TestScreen,
   
  },
  diploma:{
    screen:DiplomaScreen
  },
  certificate:{
    screen:CertificateScreen
  },
  addCertificate:{
    screen:AddCertificateScreen
  }
   
 
   
})
const AppTabNavigator = createBottomTabNavigator({
  home:{
    screen:myTestsNav,
    title:'Home',
    navigatorStyle:navStyle,
    
    navigationOptions:({navigation})=>({
      tabBarIcon:({tintColor})=>(
        <Icon name ='md-home' size={24}/>
      )
    })
    
  },
  profile:{
    screen:ProfileNav,
    title:'Profile',
    navigationOptions:({navigation})=>({
      tabBarIcon:({tintColor})=>(
        <Icon name ='md-person' size={24}/>
      )
    })
  },
 
})
const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen:AppTabNavigator,
    navigationOptions:({navigation})=>({
      headerStyle:{
        backgroundColor:'rgba(103,103,103,1)',
        opacity:1

      },
      headerTitle: (
        <Image source={require('./assets/logo.png')} style={{width:'100%',height:'100%'}}/>
    ),
      headerLeft:(
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <View style={{paddingHorizontal:10}}>
        <Icon name='md-menu' size={24} style={{color:'white'}}/>
        </View>
        </TouchableOpacity>

      )
    })
  }
})
const AppDrawerNavigator = createDrawerNavigator({
  menu:{
    screen:AppStackNavigator,
  },
  home:{
    screen:myTestsNav
  },
  profile:{
    screen:ProfileNav
  }
})
const AppSwitchNavigator = createSwitchNavigator({
  Login:{
    screen: AppNav
  },
  App:{
    screen:AppDrawerNavigator
  }
},{
  initialRouteName:'Login'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
   
  }

});
