import React,{Component} from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';

import {View,Text,TouchableOpacity} from 'react-native';
import { LogoutUser, loginUser } from '../store/actions/user_action';

 class ProfileScreen extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <View>
                <Text>Profile Page</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
                    <Text>Logout</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}
function mapStateToProps(state){
    return{
        isAuthed: state.auth.isAuthenticated
    };
}
const mapDispathToProps = (dispatch) =>{
    LogoutUser:()=>{
        return dispatch(LogoutUser());
    }
}
export default connect(mapStateToProps,mapDispathToProps)(ProfileScreen)