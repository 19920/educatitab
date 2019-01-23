import React,{Component} from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';

import {View,Text,TouchableOpacity} from 'react-native';
import { LogoutUser } from '../store/actions/user_action';

 class ProfileScreen extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.logout = this.logout.bind(this);
        

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
                <Text>Profile Page</Text>
                <TouchableOpacity onPress={this.logout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}
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