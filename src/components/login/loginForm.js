import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TouchableOpacity } from 'react-native';
import Input from './inputForm';

export default class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasErrors:true,
            form:{
                email:{
                    value:'',
                    valid:false,
                    type:'textinput',
                    rules:{
                        isEmail:true
                    }
    
                },
                password:{
                    value:'',
                    valid:false,
                    type:'textinput',
                    rules:{
                        minLength:6
                    }
    
                },
                confirmPassword:{
                    value:'',
                    valid:false,
                    type:'textinput',
                    rules:{
                       confirmPass:'password'
                    }
    
    

            }
           
            }
        }
    }
    TextChanged =(name,value)=>{
       this.setState({
           hasErrors:false

       })
       let formCopy = this.state.form;
       formCopy[name].value = value;
       this.setState({
           from:formCopy
       })
    }
    render(){
        return(
            <View style={styles.container}>
              <View style={styles.login}>
              <View style={styles.inloggining}>
                  <Text style={styles.loggain}> Logga in</Text>
                  <View style={{margin:50}}>
                   <Text>Personnummer</Text>
                   <Input 
                        placeholder='yymmdd-xxxx'
                        style={styles.input}
                        type= {this.state.form.email.type}
                        value= {this.state.form.email.value}
                        onChangeText={value=>this.TextChanged('email',value)}
                        autoCapitalize={'none'}
                        keyboardType={'email-address'}     
                        />
                         <Text>Lösenord</Text>
                 <Input 
                       
                        style={styles.input}
                        type= {this.state.form.password.type}
                        value= {this.state.form.password.value}
                        onChangeText={value=>this.TextChanged('password',value)}
                        secureTextEntry  
                        />
                  <View style={styles.Button}>
                  <TouchableOpacity  onPress={this.onPressButton}>
                      <Text style={styles.loginButton}>Logga in</Text>
                  </TouchableOpacity>
                  </View>
                  
                  </View>
                  
                  </View>
                  <View style={styles.signContent}>
                 
                      <Text style={{ color: 'white' }}>Har du inga konto ? </Text>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')}>
                          <Text style={styles.signupText}>registrera </Text>
                          </TouchableOpacity>
                  </View>
              </View>
          </View>
      )
      }
      }
  const styles = StyleSheet.create({
      container: {
     
       
           alignItems: 'center',
           justifyContent:'center'
          
           
  
      },
      input: {
          width: 300,
          height:40,
          alignItems:'center',
          borderWidth:7,
          borderColor:'black',
          textAlign: 'center',
          
      },
      inloggining:{
          backgroundColor: 'white',
          borderWidth:2,
          borderColor:'black',
          height:300,
         
          
  
      },
      Button: {
          margin: 10,
          width:100,
          textAlign:'center',
          justifyContent:'flex-end'
          
      
          
      },
      loggain:{
          fontSize:30,
              color:'white',
              backgroundColor:'red',
              width:300,
              textAlign:'center',
              height:50
      },
      logo: {
          fontSize: 40,
          paddingTop:30,
          color: 'white',
          justifyContent:'center'
         
      },
      logo2: {
          fontSize: 40,
          paddingTop:30,
          color: 'white',
          justifyContent:'center',
          backgroundColor:'red',
          
         
      },
      login: {
          paddingTop:70,
          fontSize: 30,
          color: 'white',
          alignItems: 'center',
         
      },
     
      loginButton: {
          fontSize: 20,
          textAlign: 'center',
          color: 'white',
          borderWidth:1,
          justifyContent:'flex-end',
          borderColor:'black',
          backgroundColor: 'red',
  
          
      },
     
      signContent: {
          paddingTop: 10,
          color:'white',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:'row'
  
      },
      signupText: {
          fontWeight:'bold', 
          color:'black',
      },
      title:{
          flexDirection:'row',
          margin:10,
          
      },
      title1:{
          fontSize:30,
          fontWeight:'bold', 
          color:'black',
          fontFamily:'Cochin',
          marginTop:20
        
      },
      title2:{
          backgroundColor:'red',
          fontSize:30,
          fontWeight:'bold', 
          color:'white',
          fontFamily:'Cochin',
          marginTop:20
  
      }
  })











 
