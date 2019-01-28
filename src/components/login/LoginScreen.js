import React, { Component } from 'react';
//import {firebaseRef} from './Firebase';
import Logo from './logo';
import ConfigureStore from'../store/config';
import {connect} from 'react-redux';
import jwtDecode from "jwt-decode";
import {setAuthorizationToken } from '../profile/utils';
import {LoginUserSuccess} from '../store/actions/user_action';
import {LocalStorekeys } from '../store/types';
import LoginPannel from './loginPannel'
import axios from 'axios';
import { View, StyleSheet,AsyncStorage,ActivityIndicator,ImageBackground} from 'react-native';



class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading:true,
            logoAnimation: false
        }
        this.showLogin = this.showLogin.bind(this);
        this.getTokens = this.getTokens.bind(this);
    }
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {
          backgroundColor: 'black',
          fontWeight: '300'
        },

        headerTitleStyle: {
            fontWeight: '300',
            textAlign: 'center',
            color:'white',
            flexGrow:1,
            
          
          
        }
        
      }
      getTokens=()=>{
        const store = ConfigureStore();
        AsyncStorage.getItem(LocalStorekeys.JWTTOKEN).then((token)=>{
            if(token===null){
                this.setState({loading:false})
            }else{
                setAuthorizationToken(token);
                store.dispatch(LoginUserSuccess(jwtDecode(token)));
                this.props.navigation.navigate('home')
            }   
         })

      }
      componentDidMount(){
        this.getTokens()

      }
 
    showLogin=()=>{
        this.setState({
            logoAnimation: true
        })
    }
    render(){


       
   
 
        if(this.state.loading){
            return(
           <View style={styles.loading}>
                <ActivityIndicator />
            </View>
            )
            

        }else{
            return(
                <ImageBackground source={require('../../../assets/backImage.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                <Logo 
                showLogin={this.showLogin}
                />
                <LoginPannel 
                  show={this.state.logoAnimation}
                  navigation={this.props.navigation.navigate}/>
                </View>
                </ImageBackground>
            )

        }
 
        
    }
    }
const styles = StyleSheet.create({
    container: {
   
        flex: 1,
        paddingTop:20,
         alignItems: 'center',
         opacity:1,
         
    },
    loading:{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'

    }
   
})
function mapStateToProps(state){
    return{
      User: state.User
    }
  
  }
  const mapDispatchToProps=(dispatch)=>({
    loginUser: (loginData) => {
      return dispatch(loginUser(loginData))
  
  }
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)