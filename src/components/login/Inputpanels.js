import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import  PasswordInput  from '../common/PasswordInput';
import { TextInputs } from '../common/TextInput';



export const IdentifierPanel =(props)=>{
    const {loginData,onChangeText,errors,showPanel,verifyuser,loggingIn} = props;
    return(
        <View style={styles.container}>
        <View style={styles.title}>
        <Text style={styles.loggin}>Logga in</Text>
         </View>
           <View style = {styles.inputs}>
            <TextInputs name='identifier' 
            key='identifier' 
            label='Personnummer' 
            placeholder = 'yymmdd-xxxx' 
            value={loginData.identifier}
            onChangeText={onChangeText}
            error={errors.identifier}
            autofocus={showPanel}
           
            />
            </View>
            <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={verifyuser}
                underlayColor='#fff'>
             
                    <Text style={styles.loginText}>{loggingIn ? 'Verifierar användare':'Nästa'}</Text>
                </TouchableOpacity>
           

        </View>
    )
}

export const PasswordPanel=(props)=>{
    const {loginData,onChangeText,errors,login,handleHidePanel,resetPassword,loggingIn,loginType,showPanel} = props;
    return(
   
        <View style={styles.container}>
        <View style={styles.title}>
        <Text style={styles.loggin}>Logga in</Text>
         </View>
         <View style={{flexDirection:'column'}}>
         <View style = {styles.inputs}>
            <PasswordInput
            name='password'
            key='password'
            label='Lösenord'
            value={loginData.password}
            onChangeText={onChangeText}
            error={errors.password}
            autofocus={loginType === 1}
            showPanel={showPanel}
            

            />
            </View>
            <View style={styles.forgotButton}>
            <TouchableOpacity onPress={resetPassword}>
                <Text style={{color:'#ADD8E6'}}>Glömt lösenord ? klicka här.</Text>
            </TouchableOpacity>
            </View>
            </View>

            <View style={styles.buttons2}>
            <TouchableHighlight style={styles.buttons21} onPress={()=>handleHidePanel}>
                <Text><Icon name='ios-arrow-back' size={24}/></Text>
            </TouchableHighlight>
            <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={login}
                underlayColor='#fff'>
             
                    <Text style={styles.loginText}> {loggingIn ? 'Loggar in ...':'Logga in'}</Text>
                </TouchableOpacity>
           
        
                
                </View>
           
        </View>
    )
} 

export const ForgotPasswordPanel = (props) =>{
    const {loginData,onChangeText,errors,showPanel,loggingIn,handleHidePanel,sendNewPass,showForgotPanel} = props;
    return(
        <View style={styles.container2}>
        <View style={styles.title}>
        <Text style={styles.loggin}>Logga in</Text>
         </View>
         <View style={{flexDirection:'column'}}>
         <View style = {styles.inputs}>
         <PasswordInput 
            name='newPassword'
            key='newPassword'
            label='Nytt lösenord'
            value={loginData.newPassword}
            onChangeText={(value)=>onChangeText('newPassword',value)}
            error={errors.NewPassword}
            autoFocus={showPanel}

            />
            <PasswordInput 
            name='confirmPassword'
            key='confirmPassword'
            label='Bekräfta lösenord'
            value={loginData.confirmPassword}
            onChangeText={(value)=>onChangeText('confirmPassword',value)}
            error={errors}

            />
            <TextInputs 
             name='pin'
             label='PIN'
             key='pin'
             value={loginData.pin}
             onChangeText={(value)=>onChangeText('pin',value)}
             error={errors}
             />
            </View>
            </View>

            <View style={styles.buttons2}>
            <TouchableHighlight style={styles.buttons21} onPress={()=>handleHidePanel}>
                <Text><Icon name='ios-arrow-back' size={24}/></Text>
            </TouchableHighlight>
            <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={sendNewPass}
                underlayColor='#fff'>
             
                    <Text style={styles.loginText}> {loggingIn ? 'Loggar in ...':'Logga in'}</Text>
                </TouchableOpacity>
           
        
                
                </View>
           
        </View>










        
      
    )

}
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor:'white',
        height:250

    },
    container2:{
        backgroundColor:'white',
        height:359

    },
    inputs:{
        margin:5,
        
    },
    forgotButton:{
        marginLeft:10,
        marginRight:10

    },
    buttons:{
     
     alignItems:'flex-end',
 
     borderRadius:25,
     marginRight:12
    },
    buttons2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:10

        
    },
    buttons22:{
     alignItems:'flex-end'
    },
    textButtons:{

        fontSize:20,
        backgroundColor:'red',
        color:'white'
    },
    title:{
        backgroundColor:'red',
        height:40,
        alignItems:'center'
        
    },
    loggin:{
        marginTop:5,
        fontSize:20,
        color:'white'
    },
    loginScreenButton:{
        marginRight:10,
        marginLeft:230,
        marginTop:10,
        marginBottom:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'red',
        borderRadius:10,
        alignItems:'center',
        borderWidth: 1,
        borderColor: 'black'
      },
      loginText:{
          color:'white',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      },
      loginText2:{
        color:'white',
        textAlign:'center',
        
    }

})
