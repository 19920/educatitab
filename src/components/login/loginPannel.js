import React, { Component } from 'react';
import { View, Text, StyleSheet,Animated,Image } from 'react-native';
import LoginForm from './loginForm';


export default class LoginPannel extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputForm:new Animated.Value(0),
            animFinished:false
        }

    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.show && !this.state.animFinished){
            Animated.sequence([
                Animated.timing(this.state.inputForm,{
                    toValue:1,
                    duration:1000
                })
            ]).start(
                this.setState({animFinished:true})

            )
        }
    }
    render(){
        const {navigation} =this.props
        return(
            <View>
                <Animated.View style = {{
                    opacity:this.state.inputForm,
                    top:this.state.inputForm.interpolate({
                        inputRange:[0,1],
                        outputRange:[100,30]
                    })
                }}>
                   <LoginForm navigation ={navigation}/>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})