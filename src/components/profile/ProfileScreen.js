import React,{Component} from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {View,Text,TouchableOpacity,TouchableHighlight,StyleSheet,AsyncStorage} from 'react-native';
import { LogoutUser } from '../store/actions/user_action';

 class ProfileScreen extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.logout = this.logout.bind(this);
        this.removeTokens = this.removeTokens.bind(this);

        

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
    removeTokens=()=>{
        const {navigation} = this.props;
        this .props.LogoutUser();
        alert('token removed')
        navigation.navigate('login')

    }
    logout=async()=> {
        const {navigation} = this.props;
        AsyncStorage.clear()
           navigation.navigate('login')

   
    }
    render(){
       
        return(
            <View>
                <TouchableHighlight style={styles.results} onPress={this.removeTokens}>
           
           <Text style={styles.loginButton}>logout </Text>
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
        User: state.User
    };
}
const mapDispatchToProps = (dispatch) =>({
    LogoutUser:()=>{
        return dispatch(LogoutUser());
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen)