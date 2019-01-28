import React,{Component} from 'react';
import {View,Text,} from 'react-native';
import CompletedTestTableRow from './CompletedTestTableRow';


export default class CompletedTestTable extends Component {
    constructor(props){
        super(props)
        this.state= {
            tableHead: ['Test2', 'Startnivå', 'Testdatum', 'Skola','Testresultat'],
            customerTestId:Number

        }
        this.profilePdf = this.profilePdf.bind(this);
    }
    profilePdf(customerTestId){
        alert('pdf' + customerTestId);
    }
  render() {  
    return (
        <View>
           
       {this.props.completedTests && this.props.completedTests.map((itm,i)=><CompletedTestTableRow testInfo={itm} key={i} profilePdf={this.profilePdf}/>)}

        
      </View> 
     
    )
  }
}
