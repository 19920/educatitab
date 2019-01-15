import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Image,FlatList} from 'react-native';
//http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1


export default class TestScreen extends Component{
    constructor(props){
        super()
        this.state={
            dataSource:[]
        }
    }
    componentDidMount(){
        fetch('http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1')
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
    renderItem=({item})=>{
        return(
            <View style={styles.book}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'green',marginBottom:15}}>{item.book_title}</Text>
                <Text>{item.author}</Text>
                </View>
            </View>
        )
        

    }
    static navigationOptions ={
        title:'My tests'
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