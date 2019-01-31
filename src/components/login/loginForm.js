import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import Input from './inputloginData';
import { stackNavigator } from 'react-navigation';
import toastr from 'toastr';
import { PasswordPanel, IdentifierPanel, ForgotPasswordPanel } from './Inputpanels';
import { connect } from 'react-redux';
import { checkUser, loginUser } from '../store/actions/user_action';
import { setTokens } from '../profile/utils';



class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasErrors: true,
            loggingIn: false,
            resetForm: false,
            redirectOnLogin: false,
            showPasswordPanel: false,
            showForgotPanel: false,
            showIdentifierPanel: true,
            loginData: {
                identifier: {
                    value: ''
                },
                password: {
                    value: ''
                },
                newPassword: {
                    value: ''
                },
                confirmPassword: {
                    value: ''
                },
                pin: {
                    value: ''
                },
                email: {
                    value: ''
                }


            },
            loginType: {
                Start: 0,
                Pasword: 1,
                contactInfo: 2,
                resetPass: 3

            },
            errors: {
                identifier: '',
                password: '',
                newPassword: '',
                confirmPassword: '',
                pin: '',
                email: ''

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
        this.showAllPanels = this.showAllPanels.bind(this);
        this.loginFormIsValid = this.loginFormIsValid.bind(this);
        this.manageAccess = this.manageAccess.bind(this);

    }
    handleSetLoginType() {


    }

    onChangeText(name, value) {
        let loginDataCopy = Object.assign({}, this.state.loginData);
        loginDataCopy[name].value = value;
        this.setState({ loginData: loginDataCopy })


    }
   
    verifyUser() {
        const { loginData } = this.state;
        this.setState({ loggingIn: true });
        if (loginData.identifier.value !== '') {
            this.props.checkUser(loginData.identifier.value).then(
                (response) => {
                    //alert(JSON.stringify(response))
                    if (response.payload.hasPass) {
                        const checkUserData = response.payload;
                        this.setState({
                            showPasswordPanel: true,
                            showIdentifierPanel: false,
                            showForgotPanel: true,
                            loginData: { identifier: checkUserData.userName, email: checkUserData.email, smsphone: checkUserData.phone, password: '', newPassword: '', confirmPassword: '', pin: '' },
                            loggingIn: false
                        });
                        this.handleSetLoginType(checkUserData.hasPass ? 1 : 2);
                    } else {
                        this.setState({
                            showForgotPanel: true,
                            loggingIn: false
                        })
                    }
                }, (err) => {
                    toastr.error('Fel användarnamn');
                    this.setState({ errors: { identifier: 'Personnumret finns ej . Kontakta skolan.' }, loggingIn: false })
                }).catch(error=>{
                    this.setState({errors:'Personnumret finns ej . Kontakta skolan.',loggingIn:false})
                    alert(this.state.errors)
                })
        } else {
            this.setState({ errors: { identifier: 'Personnummer krävs.' }, loggingIn: false });
            alert('Personnummer krävs.')
        }
    }
    manageAccess=()=>{
        const {navigation} = this.props
        if(this.props.User.user.exp){
            alert(this.props.User.user)
        }else{
            setTokens(this.props.User.user,()=>{
                this.setState({hasErrors: false});
                navigation('home');

            })
        }

    }
    login() {
        const {navigation} = this.props
        if (!this.loginFormIsValid()) {
            return (
                alert('some errors')
            );
        }else{
            this.setState({ loggingIn: true, errors: {} })
            this.props.loginUser(this.state.loginData).then((response) => {
               
                navigation('home');
            
                
                
               
    
            }, (error) => {
                alert(error);
                if (error.response) {
                    
                }
            }
            )
    

        }
       


    }
    sendNewPass() {

    }
    handleKeyUp() {

    }
    resetPassword() {
        this.setState({
            showForgotPanel:true,
            showIdentifierPanel:false,
            showPasswordPanel:false
        })

    }
    loginFormIsValid() {
        let formIsValid = true;
        const { loginType, loginData } = this.state;
        const errors = this.state.errors
        if (loginData.identifier.length < 1) {
            errors.identifier = 'Personnummer krävs';
            formIsValid = false;
        }
        switch (loginType) {
            case loginType.Pasword:
                if (loginData.password.length < 1) {
                    errors.password = 'Lösenord krävs';
                    this.updatedLoginData.focus();
                }
                break;
            case loginType.contactInfo:
                if (loginData.newPassword.length < 1) {
                    errors.newPassword = 'Lösenord krävs';
                    formIsValid = false
                }
                if (loginData.confirmPassword.length < 1) {
                    errors.confirmPassword = 'Bekräfta din nya lösenord';
                    formIsValid = false;
                }
                if (loginData.newPassword != loginData.confirmPassword) {
                    errors.confirmPassword = 'Lösenord stämmer inte.';
                    formIsValid = false;

                }
                break;
            case loginType.resetPass:
                if (loginData.newPassword.length < 1) {
                    errors.newPassword = 'Lösenord krävs';
                    formIsValid = false;
                }
                if (loginData.confirmPassword.length < 1) {
                    errors.confirmPassword = 'Bekräfta ditt nya lösenord.';
                    formIsValid = false;

                }
                if (loginData.newPassword.value != loginData.confirmPassword.value) {
                    errors.confirmPassword = 'Lösenord stämmer inte.';
                    formIsValid = false;

                }
                if (loginData.pin.value.length < 1) {
                    errors.email = 'Pin krävs'
                }
                break;
        }
        this.setState({ errors });
        return formIsValid;
    }
    hidePasswordPanel() {
        this.setState({
            showPasswordPanel: false, showIdentifierPanel: true
        })
    }
    hideForgotPanel() {
        this.setState({
            showForgotPanel: false, showPasswordPanel: true, loginType: loginType.Pasword
        });

    }
    showAllPanels() {
        const { showPasswordPanel, showForgotPanel, loggingIn, loginData, errors, loginType, showIdentifierPanel } = this.state;
        if (showIdentifierPanel) {
            return (
                <View style={styles.identifier}>
                    <IdentifierPanel
                        loginData={loginData}
                        onChangeText={value => this.onChangeText('identifier', value)}
                        errors={errors}
                        showpanel={showIdentifierPanel}
                        loggingIn={loggingIn}
                        verifyuser={this.verifyUser}

                    />
                </View>
            )

        }
        else if (showPasswordPanel) {
            return (
                <View style={styles.password}>

                    <PasswordPanel
                        loginData={loginData}
                        onChangeText={value => this.onChangeText('password', value)}
                        errors={errors}
                        showpanel={showPasswordPanel}
                        handleHidePanel={this.hidePasswordPanel}
                        login={this.login}
                        loginType={loginType}
                        loggingIn={loggingIn}
                        verifyUser={this.verifyUser}

                    />
                </View>

            )
        }
        else if(showForgotPanel){
            return (
                <View style={styles.forgotPassword}>
                    <ForgotPasswordPanel
                        loginData={loginData}
                        onChangeText={value => this.onChangeText('newPassword', value)}
                        errors={errors}
                        showpanel={showForgotPanel}
                        handleHidePanel={this.hideForgotPanel}
                        login={this.login}
                        loggingIn={loggingIn}
                        sendNewPass={this.sendNewPass}

                    />
                </View>

            )
        }
        else{
            return (
                <View style={styles.identifier}>
                    <IdentifierPanel
                        loginData={loginData}
                        onChangeText={value => this.onChangeText('identifier', value)}
                        errors={errors}
                        showpanel={showIdentifierPanel}
                        loggingIn={loggingIn}
                        verifyuser={this.verifyUser}

                    />
                </View>
            )
            
        }
    }



    render() {


        return (
            <View style={styles.container}>
                {this.showAllPanels()}
                {this.state.erros}


            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {

        borderColor: '#707070',
        borderWidth: 1,
        height: 252,
        textAlign: 'center'


    },
    identifier:{
        borderColor: '#707070',    
        textAlign: 'center',
        
      
    }

})
function mapStateToprops(state) {
    return {
        User: state.User
    }
}
const mapDispatchToProps = (dispatch) => ({
    checkUser: (identifier) => {
        return dispatch(checkUser(identifier))
    },
    loginUser: (loginData) => {
        return dispatch(loginUser(loginData))

    }




})
export default connect(mapStateToprops, mapDispatchToProps)(LoginForm)










