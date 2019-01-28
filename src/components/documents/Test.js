import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Image,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getUserTests} from '../store/actions/user_action';
//http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1


class TestScreen extends Component{
    constructor(props){
        super()
        this.state={
            dataSource:[]
        }
    }


   
    renderItem=({item})=>{
        return(
            <View style={styles.book}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'green',marginBottom:15}}>{item.customerTestId}</Text>
                <Text style={{fontSize:18,color:'green',marginBottom:15}}>{item.startDate}</Text>
                <Text style={{fontSize:18,color:'green',marginBottom:15}}>{item.name}</Text>
                <Text style={{fontSize:18,color:'green',marginBottom:15}}>{item.schoolName}</Text>
                <Text style={{fontSize:18,color:'green',marginBottom:15}}>{itemstartLevel}</Text>
                <Text>{item.author}</Text>
                </View>
            </View>
        )
        

    }
    static navigationOptions ={
        title:'My tests',
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
    render(){
        let books 
        return(
            <View style={styles.container}>
            <ScrollView style={{width:'100%'}}>
            <FlatList data={this.state.dataSource}
                      renderItem={this.renderItem}
            
            />
                
                </ScrollView>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
     },
     book:{
        flex:1,
        flexDirection:'row',
        marginBottom:10,
        borderWidth:1,
        borderColor:'red'

     },
     img:{
        width:80,
        height:80,
        margin:5
     }

})
function mapStateToProps(state){
    return{
        User:state.User
    }

}
 const mapDispatchToProps=(dispatch)=>({
    getUserTests: (sub) => {
      return dispatch(getUserTests(sub))
  
  }
  })
  export default connect (mapStateToProps,mapDispatchToProps)(TestScreen);