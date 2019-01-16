import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TouchableOpacity } from 'react-native';
import Input from './inputForm';
import Validation from '../validation/validationForm';

export default class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            type:'Login',
            action:'Login',
            action2:'Skapa konto',
            hasErrors:true,
            form:{
                personnummer:{
                    value:'',
                    valid:false,
                    type:'textinput',
                    rules:{
                        isRequred:true,
                        minLength:10,
                        maxLength:10
                        
                    }
    
                },
           
            password:{
                    value:'',
                    valid:false,
                    type:'textinput',
                    rules:{
                        isRequred:true,
                        minLength:6
                    }
    
                },
                 /*
                confirmPassword:{
                    value:'',
                    valid:false,
                    type:'textinput',
                    rules:{
                       confirmPass:'password'
                    } 
    
    

            }*/ 
           
            }
        }
        this.onPressButton = this.onPressButton.bind(this);
        this.TextChanged =  this.TextChanged.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
       
    }


    TextChanged =(name,value)=>{
       this.setState({
           hasErrors:false

       })
       let formCopy = this.state.form;
       formCopy[name].value = value;
       let rules = formCopy[name].rules
       let valid = Validation(value,rules)
       formCopy[name].valid = valid
       this.setState({
           form:formCopy
       })
       let newText = '';
       let numbers = '0123456789';

    for (var i=0; i < value.length; i++) {
        if(numbers.indexOf(value[i]) > -1 ) {
            newText = newText + value[i];
        }
        else {
         
            alert("please enter numbers only");
        }
    }
    this.setState({ value: newText });
    }


    onPressButton =()=>{
        alert('login clicked')
    }

    changeButtonType = () =>{
        const type = this.state.type;
        this.setState({
            type: type === 'Login' ? 'Register' :'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            action2: type === 'Login' ? 'Login':'Skapa konto'
        })
    }
    onSubmitForm = () =>{
        let isFormValid = true;
        let formItems={};
        const formCopy = this.state.form;
        for(let key in formCopy){
            if(this.state.type === 'Login'){
                if(key != 'confirmPassword'){
                   isFormValid = isFormValid && formCopy[key].valid
                    formItems[key] = formCopy[key].value
                }

            }else{
              isFormValid = isFormValid && formCopy[key].valid
                formItems[key] = formCopy[key].value

            }
        }
        if(isFormValid){
            alert('passed')

        }else{
            alert('errors')
            this.setState({
                hasErrors:true
            })
            
        }

    }
    
    render(){
        return(
            <View style={styles.container}>
              <View style={styles.login}>
              <View style={styles.inloggining}>
                  <Text style={styles.loggain}> Logga in</Text>
                  <View style={{margin:20}}>
                   
                   <Input 
                        placeholder='personnummer'
                        style={styles.input}
                        type= {this.state.form.personnummer.type}
                        value= {this.state.form.personnummer.value}
                        onChangeText={value=>this.TextChanged('personnummer',value)}
                        autoCapitalize={'none'}
                        keyboardType={'number-pad'} 
                      
                        />
                       <View>
                        
                 <Input  
                        placeholder='password' 
                        style={styles.input}
                        type= {this.state.form.password.type}
                        value= {this.state.form.password.value}
                        onChangeText={value=>this.TextChanged('password',value)}
                        secureTextEntry  
                        />
                        </View>
                        <View>
                        {this.state.type!='Login'?
                            
                            <Input  placeholder='confirm password'
                                style={styles.input}
                                type= {this.state.form.confirmPassword.type}
                                value= {this.state.form.confirmPassword.value}
                                onChangeText={value=>this.TextChanged('confirmPassword',value)}
                                secureTextEntry
                            /> :null 
                        }
                    </View> 
                        
                      
                  <View style={styles.Button}>
                  <TouchableOpacity  
                          onPress={this.onSubmitForm}
                         >
                     <Text style={{ color:'blue',alignItems:'flex-end'}}>
                     {this.state.action} 
                     </Text>
                  </TouchableOpacity>
                  </View>
                  <View style={styles.Button}>
                  <TouchableOpacity  
                          onPress={this.changeButtonType}
                         style={{color:'lightgrey'}}>
                     <Text>{this.state.action2}</Text>
                  </TouchableOpacity>
                  </View>
                  </View>
                  </View>
              </View>
          </View>
      )
      }
      }
  const styles = StyleSheet.create({
      container: {
        flex:1,
        alignItems:'center',
        
          
         
      },
      input: {
          width: 300,
          height:10,
          alignItems:'center',
          borderWidth:7,
          borderColor:'red',
          textAlign: 'center',
          
      },
      inloggining:{
     
          backgroundColor: 'white',
          borderWidth:2,
          borderColor:'black',
          
         
          
  
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
     
      
      login: {
          paddingTop:20,
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
      
  })











 
