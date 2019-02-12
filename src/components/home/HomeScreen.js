import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons'



export default class HomeScreen extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions ={
        header: null
    }
   
    render(){
        return(
            <View style={styles.container}>
           
           <ScrollView style={{ width: '100%' }}>
           
                <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('test')}>
                <View>
                <Icon name='ios-checkmark' size={44} style={{color:'white',textAlign:'center'}}/>
                <Text style={styles.test}>TestResultat </Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('certificate')}>
                <View>
                <Iconsss name='file-multiple' size={44} style={{color:'white',textAlign:'center'}}/>
                    <Text style={styles.loginButton}>Betyg och Dokument</Text>
                    </View>
                </TouchableHighlight>
               
                    <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('mycv')}>
                    <View>
                   <Icons name='filetext1' size={44} style={{color:'white',textAlign:'center'}}/>
                    <Text style={styles.loginButton}>Om mig-CV </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('mycv')}>
                    <View>
                   <Iconss name='share' size={44} style={{color:'white',textAlign:'center'}}/>
                    <Text style={styles.loginButton}>Dela mina dokument</Text>
                    </View>
                </TouchableHighlight>
               
                </ScrollView>  
              
               
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#ECEFF1',
        paddingTop:10
       
 
     },
    results:{
        backgroundColor:'#E53128',
      
        width:'100%',
        height:90,
        margin:5,
        alignItems:'center',
        paddingTop:5
       

    },
    loginButton: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        justifyContent:'center',
       color: 'white'
        
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
       color:'white',
       fontSize:20

   }
   
})