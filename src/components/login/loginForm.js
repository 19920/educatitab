import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
//import Input from './inputloginData';
import toastr from 'toastr';
import { PasswordPanel,IdentifierPanel,ForgotPasswordPanel } from './Inputpanels';
import { connect } from 'react-redux';
import { checkUser }  from '../store/actions/user_action';



class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasErrors:true,
            loggingIn:false,
            resetForm:false,
            redirectOnLogin: false,
            showPasswordPanel: false,
            showForgotPanel: false,
            loginData:{
                identifier:{
                    value:''
                },
                password:{
                    value:''
                },
                newPassword:{
                    value:''
                },
                confirmPassword:{
                    value:''
                },
                pin:{
                    value:''
                },
                email:{
                    value:''
                },

    
                },
                loginType:{
                    Start :0,
                    Pasword:1,
                    contactInfo:2,
                    resetPass:3

                },
                errors:{
                identifier:'',
                password:'',
                newPassword:'',
                confirmPassword:'',
                pin:'',
                email:''

                }
               
            }
            this.login = this.login.bind(this);
            this.onChangeText = this.onChangeText.bind(this);
            this.handleSetLoginType = this.handleSetLoginType.bind(this);
            this.sendNewPass = this.sendNewPass.bind(this);
            this.verifyUser = this.verifyUser.bind(this);
            this.handleKeyUp = this.handleKeyUp.bind(this);
            this.resetPassword = this.resetPassword.bind(this);
            this.hidePasswordPanel = this.hidePasswordPanel.bind(this);
            this.hideForgotPanel = this.hideForgotPanel.bind(this);

        }
        handleSetLoginType(){


        }
       onChangeText(name,value){
           let loginDataCopy = this.state.loginData;
           loginDataCopy[name].value = value;
           this.setState({loginData:loginDataCopy})
          
       }
        verifyUser(){
            console.log('clicked')
            const { loginData } = this.state;
            this.setState({loggingIn:true});
            if(loginData.identifier !== ''){
                console.log(loginData.identifier)
                this.props.checkUser(loginData.identifier).then((res)=>{
                    if(res.type === 'CHECK_USER'){
                        this.setState({showPasswordPanel:true});
                    }else{
                        const { checkUserData } = response.payload;
                        this.setState({
                            
                            loginData:{identifier:checkUserData.userName,email:checkUserData.email,smsphone:checkUserData.phone,password:'',newPassword:'',confirmPassword:'',pin:''},
                            loggingIn:false
                        });
                        this.handleSetLoginType(checkUserData.hasPass ? 1:2);
                    }
                },(error)=>{
                    toastr.error('Fel användarnamn');
                    this.setState({errors: {identifier:'Personnummer finns ej.Kontakta skolan.'},loggingIn:false});

                }
                );
            }else{
                this.setState({errors:{identifier:'Personnummer krävs.'},loggingIn:false})
            }
        }
        login(){

        }
        sendNewPass(){

        }
        handleKeyUp(){

        }
        resetPassword(){

        }
        loginFormIsValid(){
            let formIsValid = true;
            const { loginType,loginData } = this.state;
            if(loginData.identifier.length < 1){
                errors.identifier = 'Personnummer krävs';
                formIsValid = false;
            }
            switch(loginType){
                case loginType.Pasword:
                if(loginData.password.length < 1){
                    errors.password = 'Lösenord krävs';
                    this.updatedLoginData.focus();
                }
                break;
                case loginType.contactInfo:
                if(loginData.newPassword.length < 1){
                    errors.newPassword = 'Lösenord krävs';
                    formIsValid = false
                }
                if(loginData.confirmPassword.length < 1){
                    errors.confirmPassword = 'Bekräfta din nya lösenord';
                    formIsValid = false;
                }
                if(loginData.newPassword != loginData.confirmPassword){
                    errors.confirmPassword = 'Lösenord stämmer inte.';
                    formIsValid = false;

                }
               break;
               case loginType.resetPass:
               if(loginData.newPassword.length < 1){
                   errors.newPassword = 'Lösenord krävs';
                   formIsValid = false;
               }
               if(loginData.confirmPassword.length <1){
                   errors.confirmPassword = 'Bekräfta ditt nya lösenord.';
                   formIsValid = false;

               }
               if(loginData.newPassword != loginData.confirmPassword){
                errors.confirmPassword = 'Lösenord stämmer inte.';
                formIsValid = false;

            }
            if(loginData.pin.length < 1){
                errors.email = 'Pin krävs'
            }
            break;
            }
            this.setState({errors});
            return formIsValid;
        }
        hidePasswordPanel(){
            this.setState({
                showPasswordPanel:false,loginType:loginType.Start
            })
        }
        hideForgotPanel(){
            this.setState({
                showForgotPanel:false,showPasswordPanel:true,loginType:loginType.Pasword
            });

        }
        
   
    
    render(){
        const {showPasswordPanel,showForgotPanel,loggingIn,loginData,errors,loginType } = this.state;
        
        const shouldShowIdentifierPanel = !showPasswordPanel  && !showForgotPanel;
        return(
            <View style={styles.container}>
                <View style={styles.identifier}>
                    <IdentifierPanel 
                    loginData={loginData}
                    onChangeText={value =>this.onChangeText('identifier',value)}
                    errors={errors}
                    showpanel={shouldShowIdentifierPanel}
                    loggingIn={loggingIn}
                    verifyuser={this.verifyUser}
                    
                    />
                </View>
              
                <View style={styles.password}>
            
                    <PasswordPanel 
                    loginData={loginData}
                    onChangeText={value =>this.onChangeText('password',value)}
                    errors={errors}
                    showpanel={showPasswordPanel}
                    handleHidePanel={this.hidePasswordPanel}
                    login={this.login}
                    loginType={loginType}
                    loggingIn={loggingIn}
                    verifyUser={this.verifyUser}
                    
                    />
                </View>
                <View style={styles.forgotPassword}>
                    <ForgotPasswordPanel 
                    loginData={loginData}
                    onChangeText={value =>this.onChangeText('password',value)}
                    errors={errors}
                    showpanel={showForgotPanel}
                    handleHidePanel={this.hideForgotPanel}
                    login={this.login}
                    loggingIn={loggingIn}
                   sendNewPass={this.sendNewPass}
                 
                    />
                </View>
                


            </View>
           
      )
      }
      }
  const styles = StyleSheet.create({
    container:{
        
        borderColor:'black',
        borderWidth:5,
        height:200,
        textAlign:'center'
      
        
    },
      
  })
  function mapStateToprops(state){
     return{
        User:state.User
     }
  }
  function mapDispatchToProps(dispatch){
      return {checkUser:function(data){
         return dispatch(checkUser(data))}}
  }
  export default connect(mapStateToprops,mapDispatchToProps)(LoginForm)









 
