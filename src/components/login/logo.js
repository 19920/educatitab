import React, { Component } from 'react';
import { View, Text, StyleSheet,Animated,Easing,Image} from 'react-native';
import BackImage from '../../../assets/logo.png'
export default class Logo extends Component{
    state = {
        backImage:new Animated.Value(0),
    }
    componentWillMount(){
        Animated.sequence([
            Animated.timing(this.state.backImage,{
                toValue:1,
                duration:1000,
                

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
                        opacity: this.state.backImage,
                        top:this.state.backImage.interpolate({
                            inputRange:[0,1],
                            outputRange:[100,0]
                        })
                    }}>
                    <Image source={BackImage}
                    style={styles.image}
                    resizeMode={'contain'}
                    />
                    </Animated.View>
                   
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoStyles:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        maxHeight:80,
       
    },
    image:{
        width:270,
      

    }
})