import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Image,FlatList,ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import CompletedTestTableRow from './CompletedTestTableRow';
import {loadCompletedTestData} from '../store/actions/testData_action';
import { Icon } from 'native-base';
import FullTest from './FullTest';
class TestScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            
            selectedId:null
           
        }
       //this.profilePdf = this.profilePdf.bind(this);
    }


    static navigationOptions = {
        title:'Testresultat',
        headerStyle: {
            backgroundColor: 'rgba(103,103,103,1)',
            
        },

        headerTitleStyle: {
            fontWeight: '300',
            flexGrow:1,
            color: 'white',
            fontSize: 20,
           

        }
    }
   
    profilePdf=(customerTestId,name,schoolName,startDate,customId,productId,startLevel)=>{
        console.log(customerTestId,name,schoolName,startDate,customId,productId,startLevel)
        this.setState({selectedId:customerTestId})
        
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
            <ImageBackground source={require('../../../assets/backImage.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
           
            {this.props.completedTests ?
             <ScrollView style={{width:'100%'}}>
            { this.props.completedTests.map((item,i)=>{
               
                return(
                    <View  key={i}>
                        <View>
                            <CompletedTestTableRow
                                testInfo={item}
                                profilePdf={() => this.profilePdf(
                                    item.customerTestId,
                                    item.name,
                                    item.schoolName,
                                    item.startDate,
                                    item.customerId,
                                    item.productId,
                                    item.startLevel)} />

                        </View>

                        

                    </View>
                  
                    

                )
               
    
                })}
               
                    </ScrollView>
            
            :<View><Text>Du har inga resultat än</Text></View>}
            
           
       
            </View>
            </ImageBackground>
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