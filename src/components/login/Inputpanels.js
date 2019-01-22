import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
import  PasswordInput  from '../common/PasswordInput';
import { TextInputs } from '../common/TextInput';


export const IdentifierPanel =(props)=>{
    const {loginData,onChangeText,errors,showPanel,verifyuser,loggingIn} = props;
    return(
        <View>
            <TextInputs name='identifier' 
            key='identifier' 
            label='Personnummer' 
            placeholder = 'yymmdd-xxxx' 
            value={loginData.identifier.value}
            onChangeText={onChangeText}
            error={errors.identifier}
            autofocus={showPanel}
           
            />
            <View>
                <TouchableOpacity onPress={verifyuser}>
                    <Text>{loggingIn ? 'Verifierar användare':'Nästa'}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export const PasswordPanel=(props)=>{
    const {loginData,onChangeText,errors,login,handleHidePanel,resetPassword,loggingIn,loginType,showPanel} = props;
    return(
   
        <View>
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
            <TouchableHighlight onPress={resetPassword}>
                <Text>Glömt lösenord ? klicka här.</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={handleHidePanel}>
                <Text>Backa</Text>
            </TouchableHighlight>
            <View>
                <TouchableOpacity onPress={login}>
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