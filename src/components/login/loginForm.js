import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import Input from './inputloginData';
import { stackNavigator } from 'react-navigation';
import toastr from 'toastr';
import { PasswordPanel, IdentifierPanel, ForgotPasswordPanel } from './Inputpanels';
import { connect } from 'react-redux';
import { checkUser, loginUser,resetPassword,getRestToken} from '../store/actions/user_action';
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
                Password: 1,
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
        console.log(name,value)
        let loginDataCopy = Object.assign({}, this.state.loginData);
        loginDataCopy[name].value = value;
        this.setState({ loginData: loginDataCopy });

        
    }

    verifyUser() {
        const { loginData } = this.state;
        this.setState({ loggingIn: true });
        if (loginData.identifier.value !== '') {
            //console.log(loginData.identifier.value)
            this.props.checkUser(loginData.identifier.value).then(
                (response) => {
                    //console.log(response)
                    if (response.payload.hasPass) {

                        const checkUserData = response.payload;
                        //console.log(checkUserData);

                        this.setState({
                            showPasswordPanel: true,
                            showIdentifierPanel: false,
                            showForgotPanel: true,
                            loginData: {
                                identifier: { value: checkUserData.userName },
                                email: { value: checkUserData.email },
                                smsphone: { value: checkUserData.phone },
                                password: {value:''},
                                newPassword: {value:''},
                                confirmPassword: {value:''},
                                 pin: {value:''}
                            },
                            loggingIn: false
                        }, () => {
                            this.handleSetLoginType(checkUserData.hasPass ? 1 : 2);
                            //console.log('state.loginData', this.state.loginData)
                        });

                    } else {
                        this.setState({
                            showForgotPanel: true,
                            loggingIn: false
                        })
                    }
                }).catch(error => {
                    this.setState({ errors: 'Personnumret finns ej . Kontakta skolan.', loggingIn: false })
                    alert(this.state.errors)
                })
        } else {
            this.setState({ loggingIn: false });
            alert('Personnummer krävs.')
        }
    }
    manageAccess = () => {
        const { navigation } = this.props

        if (this.props.User.user.exp) {
            alert(this.props.User.user)
        } else {
            setTokens(this.props.User.user, () => {
                this.setState({ hasErrors: false });
                navigation('home');


            })
        }

    }
    login() {
        const { navigation } = this.props;
        const { loginData, loginType } = this.state;
        if (loginData.password.value !== '') {
            //this.setState({ loggingIn: true, errors: {} })
            this.props.loginUser({ identifier: loginData.identifier.value, password: loginData.password.value }).then((response) => {
                this.setState({ loginType: loginType.Start, loggingIn: false })
                //if(response.loginData.password !== ''){750
                navigation('home');

                //}else{
                //alert('Lösenord krävs')
                //}



            }).catch(error => {
                console.log(error)

            })
        } else {
            alert('Lösenord krävs');
        }
    }
    
    handleKeyUp() {

    }
    resetPassword() {
       const {token } = this.props;
       const { loginData,loginType } = this.state;
        this.props.getRestToken({identifier:loginData.identifier.value,token:token}).then(response=>{
            //console.log(response)
            const restPassTokenData  = response.payload.data;
            console.log(restPassTokenData);
            this.setState((prevState)=> ({
                showPasswordPanel: false,
                showForgotPanel: true,
                loginData:{identifier:restPassTokenData.identifier || prevState.loginData.identifier.value,
                email:restPassTokenData.email || '',
                smsphone:restPassTokenData.phone || '',
                password:'',
                newPassword:'',
                confirmPassword:'',
                pin:''
            }
            }), () => this.handleSetLoginType(loginType.resetPass));
        });
       

    }
    sendNewPass() {
        const { navigation } = this.props;
        const { loginData } = this.state
        this.props.resetPassword(loginData.identifier.value,loginData.pin.value,loginData.newPassword.value,loginData.confirmPassword.value)
        .then((res)=>{
            console.log(res);
            navigation('home');
            this.hideForgotPanel();

        }).catch(error=>{
            console.log(error)
        })
    }
    loginFormIsValid() {
        let formIsValid = true;
        const { loginType, loginData } = this.state;
        const errors = Object.assign({}, this.state.errors)
        if (loginData.identifier.length < 1) {
            errors.identifier = 'Personnummer krävs';
            formIsValid = false;
        }
        switch (loginType) {
            case loginType.Password:
                if (loginData.password.length < 1) {
                    errors.password = 'Lösenord krävs';
                    //this.updatedLoginData.focus();
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
            showForgotPanel: false, showPasswordPanel: true,showIdentifierPanel:false
        });

    }
    showAllPanels() {
        const { showPasswordPanel, showForgotPanel, loggingIn, loginData, errors, loginType, showIdentifierPanel } = this.state;
        if (showIdentifierPanel) {
            return (
                <View style={styles.identifier}>
                    <IdentifierPanel
                        loginData={loginData.identifier}
                        onChangeText={(value) => this.onChangeText('identifier', value)}
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
                        loginData={loginData.password}
                        onChangeText={(value) => this.onChangeText('password', value)}
                        errors={errors}
                        showpanel={showPasswordPanel}
                        handleHidePanel={this.hidePasswordPanel}
                        login={this.login}
                        loginType={loginType}
                        resetPassword={this.resetPassword}
                        loggingIn={loggingIn}

                    />
                </View>

            )
        }
        else if (showForgotPanel) {
            return (
                <View style={styles.forgotPassword}>
                    <ForgotPasswordPanel
                        loginData={loginData}
                        onChangeText={(value)=> this.onChangeText(value)}
                        errors={errors}
                        showpanel={showForgotPanel}
                        handleHidePanel={this.hideForgotPanel}
                        loggingIn={loggingIn}
                        sendNewPass={this.sendNewPass}

                    />
                </View>

            )
        }
        else {
            return (
                <View style={styles.identifier}>
                    <IdentifierPanel
                        loginData={loginData}
                        onChangeText={(value) => this.onChangeText('identifier', value)}
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
 const {showForgotPanel} = this.state;

        return (
            <View style={{ borderColor: '#707070', borderWidth: 1, backgroundColor:'white',textAlign: 'center',height:(showForgotPanel?360:252)}}>
                {this.showAllPanels()}
                {this.state.erros}


            </View>

        )
    }
}
const styles = StyleSheet.create({
    identifier: {
        borderColor: '#707070',
        textAlign: 'center',


    },
    password: {
        borderColor: '#707070',
        textAlign: 'center',
   


    },
    forgotPassword:{
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

    },
    getRestToken:(data)=>{
        return dispatch(getRestToken(data))

    },
    resetPassword:(Data)=>{
        return dispatch(resetPassword(Data))
    }




})
export default connect(mapStateToprops, mapDispatchToProps)(LoginForm)










