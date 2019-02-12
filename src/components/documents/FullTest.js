import React, { Component } from 'react'
import {View,Text,Stylesheet} from 'react-native';
import axios from 'axios';
export default class FullTest extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData=async() =>{
    const {params} = this.props.navigation.state;
    const response = await fetch('https://vux.yourvoice.se/assessmentdev/api/v1/testdataapi/GetFinishedTests/'+ params.id);
    const tests = await response.json();
    this.setState({data:tests});
  };
  componentDidMount(){
    this.fetchData();
  }
  render() {
   
    let test = <Text style={{textAlign:'center'}}></Text>
    if(this.props.customerTestId){
      
      test =(
        <View>
          <Text>{this.props.customerTestId}</Text>
          <Text>{this.props.startDate}</Text>
          <Text>{this.props.name}</Text>
          <Text>{this.props.schoolName}</Text>
          <Text>{this.props.customeId}</Text>
          <Text>{this.props.productId}</Text>
        </View>
      )
    }
    return test;
  }
}
