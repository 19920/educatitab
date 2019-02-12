

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
import FullTest from './src/components/documents/FullTest';
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
  navaBarTextFontSize:30,
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
  
})
const underHomeNav = createStackNavigator({
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
const myTestsNav = createStackNavigator({
  home:{
    screen:HomeScreen,
      
  },
  
})
const AppTabNavigator = createBottomTabNavigator({
  home:{
    screen:HomeScreen,
    navigatorStyle:navStyle,
    navigationOptions:({navigation})=>({
      tabBarIcon:({tintColor})=>(
        <Icon name ='md-home' size={34}/>
      )
    })
    
  },
  profile:{
    screen:ProfileNav,
    title:'Profile',
    navigationOptions:({navigation})=>({
      tabBarIcon:({tintColor})=>(
        <Icon name ='md-person' size={34}/>
      )
    })
  },
 
})
const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen:AppTabNavigator,
    navigationOptions:({navigation})=>({
      headerStyle:{
        backgroundColor:'#676767',
        opacity:1

      },
      headerTitle: (
        <Image source={require('./assets/logo.png')} style={{width:270,height:80,marginLeft:15}}/>
    ),
      headerLeft:(
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <View style={{paddingHorizontal:8}}>
        <Icon name='md-menu' size={24} style={{color:'white'}}/>
        </View>
        </TouchableOpacity>

      )
    })
  },
  test:{
    screen:TestScreen,
   
  },
  FullTest:{
    screen:FullTest

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
