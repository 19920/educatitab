import React, { Component } from 'react';
import { View, Text, StyleSheet,Animated,Easing } from 'react-native';
export default class Logo extends Component{
    state = {
        educateAnim:new Animated.Value(0),
        itAnim:new Animated.Value(0)
    }
    componentWillMount(){
        Animated.sequence([
            Animated.timing(this.state.educateAnim,{
                toValue:1,
                duration:1000,
                easing:Easing.easeOutCubic

            }),
            Animated.timing(this.state.itAnim,{
                toValue:1,
                duration:500,
                easing:Easing.easeOutCubic

            }),
        ]).start(()=>{
          this.props.showLogin()
        })
           
    }
    render(){
        return(
           <View>
            <View style = {styles.logoStyles}>
                    <Animated.View style={{
                        opacity: this.state.educateAnim,
                        top:this.state.educateAnim.interpolate({
                            inputRange:[0,1],
                            outputRange:[100,0]
                        })
                    }}>
                        <Text style={styles.educate}>Educate</Text>

                    </Animated.View>
                    <Animated.View style = {{
                        opacity:this.state.itAnim,
                        top:this.state.itAnim.interpolate({
                            inputRange:[0,1],
                            outputRange:[100,0]
                        })
                    }}>
                        <Text style={styles.it}>It</Text>
                    </Animated.View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoStyles:{
        marginTop:50,
        flex:1,
        flexDirection:'row',
        maxHeight:50
    },
    educate:{
        fontSize:40,
        fontFamily:'Roboto-Italic',
        color:'white'

    },
    it:{
        fontSize:40,
        fontFamily:'Roboto-Italic',
        color:'black'

    }
})