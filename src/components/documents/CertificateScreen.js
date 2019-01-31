import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,FlatList,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';


export default class CertificateScreen extends Component{
    constructor(props){
        super()
        this.state={
            certificates:['Betyg Grundskolan 9:an','Intygg arbete Blixtin','Intyg praktik Your voice']
        }
     
    }
    
    static navigationOptions ={
        title:'Betygg & Dokument',
        headerStyle: {
            backgroundColor: 'red',
            fontWeight: '100'
          },
  
          headerTitleStyle: {
              fontWeight: '300',
              textAlign: 'center',
              color:'white',
              fontSize:20,
              flexGrow:1,
            
          }
    }
    render(){
         const {certificates} = this.state;
        return(
            <View style={styles.container}>
            <ScrollView style={{width:'100%'}}>
             {certificates.map((item,i)=>{
                 return(
                     <View >
                         <View style={styles.testpannel}>
                         <Icon name='file-pdf-o' size={24} style={{color:'white'}}/>
                         <View key ={i} style={styles.testpannel2}>
                         <Text style={styles.text}>{item}</Text>
                         <View style={{flexDirection:'row'}}>
                         <TouchableHighlight 
                         onPress={()=>alert('are u sure?')}
                         style={styles.icons}>
                         <Icons name='delete' size={20} style={{color:'white',textAlign:'right'}}/>
                         </TouchableHighlight>
                         <TouchableHighlight 
                         onPress={()=>alert('do u really want to share this?')}
                         style={styles.icons}>
                         <Icon name='share' size={20} style={{color:'white',textAlign:'right'}}/>
                         </TouchableHighlight>
                         </View>
                     </View>
                     </View>
                    
                    
                     </View>
                    
                 )
             })}
        
                </ScrollView>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('addCertificate')}
                style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
     },
     testpannel:{
        flex:1,
        borderWidth:1,
        backgroundColor:'rgba(103,103,103,1)',
        borderRadius:10,
        opacity:1,
        margin:10,
        flexDirection:'column'
       

     },
     testpannel2:{
        flex:1,
        flexDirection:'row',
        marginTop:10,
        
     
       
       

     },
     text:{
        color:'white',
        marginLeft:9,
        marginRight:9,
        textAlign:'center',

     },
     icons:{
         paddingLeft:10
     },
     addButton:{
         position:'absolute',
         zIndex:11,
         right:20,
         bottom:40,
         backgroundColor:'red',
         width:50,
         height:50,
         borderRadius:50,
         alignItems:'center',
         justifyContent:'center',
         elevation: 5
     },
     addButtonText:{
         color:'#fff',
         fontSize:24
     }

})