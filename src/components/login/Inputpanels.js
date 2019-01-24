import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity,TouchableHighlight} from 'react-native';
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
            value={loginData.identifier.value}
            onChangeText={onChangeText}
            error={errors.identifier}
            autofocus={showPanel}
           
            />
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={verifyuser}>
                    <Text style={styles.textButtons}>{loggingIn ? 'Verifierar användare':'Nästa'}</Text>
                </TouchableOpacity>
            </View>

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
            value={loginData.password.value}
            onChangeText={onChangeText}
            error={errors.password}
            autofocus={loginType === 1}
            showPanel={showPanel}
            

            />
            </View>
            <View style={styles.forgotButton}>
            <TouchableHighlight onPress={resetPassword}>
                <Text style={{color:'blue'}}>Glömt lösenord ? klicka här.</Text>
            </TouchableHighlight>
            </View>
            </View>

            <View style={styles.buttons2}>
            <TouchableHighlight style={styles.buttons21} onPress={handleHidePanel}>
                <Text>Backa</Text>
            </TouchableHighlight>
        
                <TouchableOpacity style={styles.buttons22} onPress={login}>
                    <Text>
                        {loggingIn ? 'Loggar in ...':'Logga in'}
                    </Text>
                </TouchableOpacity>
                </View>
           
        </View>
    )
} 

export const ForgotPasswordPanel = (props) =>{
    const {loginData,onChangeText,errors,showPanel,loggingIn,value,handleHidePanel,sendNewPass,showForgotPanel} = props;
    return(
      
        <View>
            <PasswordInput 
            name='newPassword'
            key='newPassword'
            label='Nytt lösenord'
            value={loginData.newPassword.value}
            onChangeText={onChangeText}
            error={errors}
            autofocus={showForgotPanel}

            />
             <PasswordInput 
            name='confirmPassword'
            key='confirmPassword'
            label='Bekräfta lösenord'
            value={loginData.confirmPassword}
            onChangeText={onChangeText}
            error={errors}

            />
             <TextInputs 
             name='pin'
             label='PIN'
             key='pin'
             value={loginData.pin}
             onChangeText={onChangeText}
             error={errors}
             />
             <View>
                 <TouchableHighlight onPress={handleHidePanel}>
                     <Text>handleHidePanel</Text>
                 </TouchableHighlight>
                 <TouchableHighlight onPress={sendNewPass}>
                     <Text>{loggingIn ? 'loggar in ...':'spara och logga in'}</Text>
                 </TouchableHighlight>
             </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flexDirection:'column'

    },
    inputs:{
        margin:10,
        
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
    }

})
