import React, { Component } from 'react';
//import {firebaseRef} from './Firebase';
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,AsyncStorage } from 'react-native';



export default class LoginScreen extends Component{
    constructor(props) {
        super(props)
        this.state = {
            personnummer: '',
            password: '',
            errorForms: []

        }
       //this.loginButton = this.loginButton.bind(this); 
       this.onChangeNumbers = this.onChangeNumbers.bind(this);
       this.onPress = this.onPress.bind(this);
       this.onPressButton = this.onPressButton.bind(this);
    }
    static navigationOptions={
        title:'Login'
    }
    //loginButton(){
       // firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            
           
          //});
         // this.props.navigation.navigate('home');
    //}
    onChangeNumbers(text){
        if(isNaN(text)){
            alert('enter only numbers')
        }
        else{
            this.setState({personnummer:text})
        }

    }
    onPressButton (){
        if(!this.state.password){
          this.setState({errorString:'password must be '})
        }else{
            axios.post('https://http://hilda.yourvoice.se/testsystemutv/login.asp'),
            
            this.props.navigation.navigate('home');
        }
        }
    onPress(){
        if(this.state.personnummer){
            this.props.navigation.navigate('home')
            //if(this.state.personnummer.length>10){
                //alert('personnummer must not be more than 10 numbers!')
            //}else if(this.state.personnummer.length<10){
              //  alert('personnummer must not be less than 10 numbers!')
            //}else{
               // this.props.navigation.navigate('password')
           // }
        }
        else{
            alert('please enter your personal number ')
        }
    }
   
    render(){
       
    return(
        <View style={styles.container}>
          <View style={styles.title}>
                <Text style={styles.title1}>Educate</Text>
                <Text style={styles.title2}>it</Text>
            </View>
            <View style={styles.login}>
            <View style={styles.inloggining}>
                <Text style={styles.loggain}> Logga in</Text>
                <View style={{margin:50}}>
                 <Text>Personnummer</Text>
                <TextInput style={styles.input}
                   label='Personnummer'
                   onChangeText={this.onChangeNumbers}
                    value={this.state.personnummer}
                    placeholder='yymmdd'
                    returnKeyType='next'
                    keyboardAppearance='dark'  
                    autoCorrect={false}
                />
                 <TextInput style={styles.input}
                   label='Lösenord'
                   placeholder='password'
                   onChangeText={(text)=>this.setState({password:text})}
                   value={this.state.password}
                   secureTextEntry={true}
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
   
        flex: 1,
         alignItems: 'center',
         backgroundColor: '#707070',
         opacity:0.8
         

    },
    input: {
        width: 200,
        height:40,
        alignItems:'center',
        borderWidth:2,
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