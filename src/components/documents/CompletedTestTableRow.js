import React from 'react';
import moment from 'moment';
import {View,ScrollView,Text,TouchableOpacity,StyleSheet,Button} from 'react-native';

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
            <ScrollView>
            <View style={styles.testpannel}>
              <Text style={styles.text}>Test: {name}</Text>
              <Text style={styles.text}>Startnivå: {startLevel}</Text>
              <Text style={styles.text}>Datum: {niceDate}</Text>
              <Text style={styles.text}>Skola: {schoolName}</Text>
              <Text style={styles.text}>Test Id: {customerTestId}</Text>
              <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={()=>props.profilePdf(customerTestId)}
                underlayColor='#fff'>
                <Text style={styles.loginText}>TestProfil</Text>
                </TouchableOpacity>
                  </View>
              </ScrollView> 
      </View>
  )
}

const styles =StyleSheet.create({
    conatiner:{
            flex:1,
            alignItems:'center',
            backgroundColor:'#ECEFF1'
    },
    testpannel:{
        flex:1,
        marginBottom:10,
        borderWidth:1,
        borderColor:'red',
        backgroundColor:'#676767',
        margin:5,
        opacity:1,
        textAlign:'center',
       

     },
     text:{
        color:'white'

     },
     loginScreenButton:{
        marginRight:40,
        marginLeft:40,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#1E6738',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },
      loginText:{
          color:'#fff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      }

})