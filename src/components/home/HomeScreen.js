import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import {firebaseRef} from './Firebase';

export default class HomeScreen extends Component{
    constructor(props){
        super(props)
        this.onlogoutButton = this.onlogoutButton.bind(this);
    }
    static navigationOptions ={
        title:'Home'
    }
    onlogoutButton(){
        firebaseRef.auth().signOut().then(function() {
            console.log('signed out');
          
          }).catch(function(error) {
            console.log(error);
          });
          this.props.navigation.navigate('login')  
    }
    render(){
        return(
            <View style={styles.container}>
           
            <ScrollView style={{width:'100%'}}>
            <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('login')}>
           
           <Text style={styles.loginButton}>logout <Icon name='ios-checkmark' size={24} /></Text>
       </TouchableHighlight>
                <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('test')}>
                <Text style={styles.test}> <Text>TestResultat </Text><Icon name='ios-folder' size={24} /> </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('certificate')}>
           
                    <Text style={styles.loginButton}>Betyg och Dokument <Icon name='ios-checkmark' size={24} /></Text>
                </TouchableHighlight>
               
                    <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('mycv')}>
                <Text style={styles.loginButton}>Om mig-CV <Icon name='check' size={24} /></Text>
                </TouchableHighlight>
               
                    <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('diploma')}>
                    
                    <Text style={styles.loginButton}> Dela mina Dokument <Icon name='share-apple' size={24} /></Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('test')}>
                <Text style={styles.test}> <Text>TestResultat </Text><Icon name='ios-folder' size={24} /> </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('certificate')}>
           
                    <Text style={styles.loginButton}>Betyg och Dokument <Icon name='ios-checkmark' size={24} /></Text>
                </TouchableHighlight>
               
                    <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('mycv')}>
                <Text style={styles.loginButton}>Om mig-CV <Icon name='check' size={24} /></Text>
                </TouchableHighlight>
               
                    <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('diploma')}>
                    
                    <Text style={styles.loginButton}> Dela mina Dokument <Icon name='share-apple' size={24} /></Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('test')}>
                <Text style={styles.test}> <Text>TestResultat </Text><Icon name='ios-folder' size={24} /> </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('certificate')}>
           
                    <Text style={styles.loginButton}>Betyg och Dokument <Icon name='ios-checkmark' size={24} /></Text>
                </TouchableHighlight>
               
                    <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('mycv')}>
                <Text style={styles.loginButton}>Om mig-CV <Icon name='check' size={24} /></Text>
                </TouchableHighlight>
               
                    <TouchableHighlight style={styles.results} onPress={()=>this.props.navigation.navigate('diploma')}>
                    
                    <Text style={styles.loginButton}> Dela mina Dokument <Icon name='share-apple' size={24} /></Text>
                </TouchableHighlight>
              
                </ScrollView>
               
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