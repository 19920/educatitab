import React,{Component} from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {View,Text,TouchableOpacity,TouchableHighlight,StyleSheet} from 'react-native';
import { LogoutUser } from '../store/actions/user_action';

 class ProfileScreen extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.logout = this.logout.bind(this);
        

    }
    static navigationOptions ={
        title:'Profile',
        headerStyle: {
            backgroundColor: '#16a085',
            paddingHorizontal: 8,
            fontWeight: '300'
          },
  
          headerTitleStyle: {
              fontWeight: '300',
              textAlign: 'center',
              color:'white',
              flexGrow:1,
              alignSelf:'center',
              alignItems:'center'
            
            
          }
        
    }
    logout() {
        const {navigation} = this.props;
        this.props.LogoutUser().then(()=>{
           navigation.navigate('login')

        });
    }
    render(){
       
        return(
            <View>
                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('myCV')}>
                    <Text>Go to my CV</Text>
                </TouchableOpacity>

                <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('login')}>
           
           <Text style={styles.loginButton}>logout <Icon name='ios-checkmark' size={24} /></Text>
       </TouchableHighlight>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    results:{
        backgroundColor:'red',
      
        width:'100%',
        height:50,
        margin:5,
        alignItems:'center',
        color:'white'

    },
    loginButton: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        justifyContent:'center',
       color: 'white'
        
    },
    container:{
       flex:1,

       alignItems:'center',
       backgroundColor:'#ECEFF1'
      

    },
    title:{
        backgroundColor:'#676767',
        width:'100%',
        height:169,
       
    },
    img:{
        width:10,
        height:100
        
    },
   test:{

   }
   
})
function mapStateToProps(state){
    return{
        isAuthenticated: state.isAuthenticated
    };
}
const mapDispatchToProps = (dispatch) =>({
    LogoutUser:()=>{
        return dispatch(LogoutUser());
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen)