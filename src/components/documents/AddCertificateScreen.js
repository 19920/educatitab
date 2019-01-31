import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableHighlight,TouchableOpacity,Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';


export default class AddCertificateScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
          text: '',
          filePath: {},
      };
 
       this.chooseFile = this.chooseFile.bind(this);
    }
    static navigationOptions ={
      title:'Ladda Up',
      headerStyle: {
          backgroundColor: 'red',
          fontWeight: '100'
        },

        headerTitleStyle: {
            fontWeight: '300',
            textAlign: 'center',
            color:'white',
            fontSize:20,
            flexGrow:1,
          
        }
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
      <Text>Titel</Text>
        <View style={styles.main}>
        
        <TextInput
          style={styles.textInput} 
          placeholder='title'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
          onChangeText={(text)=>this.setState({text})}>
          </TextInput>
      
        <TouchableOpacity 
        style={styles.loginScreenButton}
          onPress={this.chooseFile}>
          <Text style={styles.loginText}>Ladda up filen</Text>
        </TouchableOpacity>
        </View>
     
        <Image source={this.state.filePath} style={styles.uploadAvatar} />
      
        <Text>{this.state.text.value}</Text>
        <TouchableHighlight 
         style={styles.loginScreenButton2}
         onPress={()=>alert('Filen skickas')}>
          <Text style={styles.loginText}>Skicka in</Text>
        </TouchableHighlight>
      </View>
        
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10
  },
  main:{
    flexDirection:'row'
  },
  textInput:{
    alignSelf:'stretch',
    color:'black',
    width:200,
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'black'
  },
  loginScreenButton:{
    marginRight:10,
    marginLeft:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginScreenButton2:{
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
  },
  uploadAvatar:{
    width:50,
    height:50
  }
})
