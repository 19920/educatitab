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
              <Text style={styles.text}>{niceDate},{schoolName} </Text>
              <Text style={styles.text}>{name}</Text>
              <View>
              <Text style={styles.text}>Resultat:</Text>
              <Text style={styles.text}>{startLevel}</Text>
              </View>
            
              <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={()=>props.profilePdf(customerTestId)}
                underlayColor='#fff'>
                <Text style={styles.loginText}>TestProfil</Text>
                </TouchableOpacity>
                  </View>
                  <View style={styles.testpannel}>
              <Text style={styles.text}>{niceDate},{schoolName} </Text>
              <Text style={styles.text}>{name}</Text>
              <View>
              <Text style={styles.text}>Resultat:</Text>
              <Text style={styles.text}>{startLevel}</Text>
              </View>
            
              <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={()=>props.profilePdf(customerTestId)}
                underlayColor='#fff'>
                <Text style={styles.loginText}>TestProfil</Text>
                </TouchableOpacity>
                  </View>
                  <View style={styles.testpannel}>
              <Text style={styles.text}>{niceDate},{schoolName} </Text>
              <Text style={styles.text}>{name}</Text>
              <View>
              <Text style={styles.text}>Resultat:</Text>
              <Text style={styles.text}>{startLevel}</Text>
              </View>
            
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
    container:{
            flex:1,
            paddingTop:10,
            backgroundColor:'#ECEFF1'
    },
    testpannel:{
        flex:1,
        
        marginBottom:10,
        borderWidth:1,
        borderColor:'red',
        backgroundColor:'rgba(103,103,103,1)',
        margin:5,
        borderRadius:10,
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
        marginBottom:10,
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