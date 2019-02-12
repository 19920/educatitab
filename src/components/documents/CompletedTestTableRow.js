import React from 'react';
import moment from 'moment';
import {View,ScrollView,Text,TouchableOpacity,StyleSheet,Button} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';

export const testInfo={
    name:'',
    startLevel:'',
    startDate:Date,
    schoolName:'',
    customerTestId:''


}
export default function CompletedTestTableRow(props) {
    const {name,startLevel,startDate,schoolName,customerTestId } = props.testInfo
    const niceDate = moment(startDate).format("YYYY-MM-DD [kl.] HH:mm")
    
  return (

    <View style={styles.container}>
    <View style={styles.title}>
    <Icons name='ios-checkmark' size={64} style={{color:'white', marginLeft:12, marginRight:12}}/>
    <Text style={styles.text3}>{name}</Text>
     </View>
       <View style = {styles.inputs}>
       <Text style={styles.text}><Icon name='calendar-check-o' size={15}/>  {niceDate} </Text>
       <Text style={styles.text}><Icon name='building-o' size={15}/>  {schoolName} </Text>
       <View style={{height:30}}>

       </View>
       <Text style={styles.text}>Resultat:</Text>
      <Text style={styles.text2}>{startLevel}</Text>
        </View>
        <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={props.profilePdf}
                underlayColor='#fff'>
                <Text style={styles.loginText}> <Icon name='file-pdf-o' size={15} style={{ color: 'white'}} /> TestProfil</Text>
                </TouchableOpacity>
       

    </View>
    
  )
}

const styles =StyleSheet.create({
    container:{
            flex:1,
            textAlign: 'center',
            backgroundColor:'white',
            borderWidth:1,
            borderColor:'black',
            justifyContent:'center',
            margin:15
    },
    testpannel:{
        flex:1,
        marginBottom:10,
        marginLeft:9,
        marginRight:9,
        borderWidth:1,
        backgroundColor:'rgba(103,103,103,1)',
        borderRadius:10,
        opacity:1,
        textAlign:'center',
       

     },
     text:{
        color:'#555555',
        marginLeft:12,
        marginRight:12,
        fontSize:18

     },
     inputs:{
       marginTop:20

     },
     text2:{
        color:'black',
        marginLeft:12,
        marginRight:12,
      
        fontSize:25,
        fontFamily:'bold'

     },
     text3:{
        color:'white',
        marginLeft:12,
        marginRight:12,
        fontSize:20,
        fontFamily:'bold'

     },
     loginScreenButton:{
        marginRight:80,
        marginLeft:80,
        marginTop:10,
        marginBottom:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#707070',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff'
      },
      loginText:{
          color:'#fff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      },
      title:{
        backgroundColor:'#E53128',
        height:100,
      fontSize:20,
        justifyContent:'center'
      }
  

})