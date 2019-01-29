import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Image,FlatList} from 'react-native';
import {connect} from 'react-redux';
import CompletedTestTableRow from './CompletedTestTableRow';
import {loadCompletedTestData} from '../store/actions/testData_action';
class TestScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            
           
           
        }
        this.profilePdf = this.profilePdf.bind(this);
    }
    
    static navigationOptions ={
        title:'Testresultat',
        headerStyle: {
            backgroundColor: 'red',
            paddingHorizontal: 8,
            fontWeight: '300'
          },
  
          headerTitleStyle: {
              fontWeight: '300',
              textAlign: 'center',
              fontSize:30,
              color:'white',
              flexGrow:1,
              alignSelf:'center',
              alignItems:'center'
            
            
          }
    }
    profilePdf(customerTestId){
        alert('pdf' + customerTestId);
    }
  
    componentDidMount(){
        this.props.loadCompletedTestData().then((res)=>{
            console.log(res)
        }).catch(error=>{
           console.log(error)
        })

    }
    render(){
        
        return(
            <View style={styles.container}>
           
            {this.props.completedTests ?
             <ScrollView style={{width:'100%'}}>
            { this.props.completedTests.map((item,i)=>{
               
                return<CompletedTestTableRow testInfo={item} key={i}/>
                
    
                })}
                    </ScrollView>
            
            :<View><Text>Du har inga resultat än</Text></View>}
           
        
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
        completedTests: state.testData.completedTests,
    }

}
 const mapDispatchToProps=(dispatch)=>({
    loadCompletedTestData: () => {
      return dispatch(loadCompletedTestData())
  
  }
  })
  export default connect (mapStateToProps,mapDispatchToProps)(TestScreen);