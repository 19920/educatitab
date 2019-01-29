import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,FlatList,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class CertificateScreen extends Component{
    constructor(props){
        super()
        this.state={
            dataSource:[]
        }
        this.verifyuser = this.verifyuser.bind(this);
    }
    componentDidMount(){
        fetch('https://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1')
        .then((response)=>response.json())
        .then((response)=>{
           this.setState({
               dataSource:response.book_array
           })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    verifyuser(){

    }
    renderItem=({item,i})=>{
        return(
            <View style={styles.book} key={i}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'green',marginBottom:15}}>{item.book_title}</Text>
                <Text>{item.author}</Text>
                </View>
                <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={this.verifyuser}
                underlayColor='#fff'>
             
                    <Text style={styles.loginText}><Icon name='ios-redo' size={24}/></Text>
                </TouchableOpacity>

            </View>
        )
        

    }
    static navigationOptions ={
        title:'Betygg',
        headerStyle: {
            backgroundColor: 'red',
            fontWeight: '100'
          },
  
          headerTitleStyle: {
              fontWeight: '300',
              textAlign: 'center',
              color:'white',
              fontSize:30,
              flexGrow:1,
            
          }
    }
    render(){
         
        return(
            <View style={styles.container}>
            <ScrollView style={{width:'100%'}}>
            <FlatList 
            data={this.state.dataSource}
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