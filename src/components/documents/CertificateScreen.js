import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import ImagePicker from 'react-native-image-picker';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import DocumentScanner from 'react-native-document-scanner';



export default class CertificateScreen extends Component {
    constructor(props) {
        super()
        this.state = {
            certificates: [
                {id:1,name:'Betyg Grundskolan 9:an'},
             {id:2,name:'Intygg arbete Blixtin'}, 
             {id:3, name:'Intyg praktik Your voice'}],
            isVisisble: false,
            isAttachedVisible: false,
            text: '',
            isModalVisible: false,
            filePath: {},
            fileUri: '',
            fileType: '',
            fileName: '',
            fileSize: '',
        }

    }

    static navigationOptions = {
        title: 'Betygg & Dokument',
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
    toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isVisisble, isVisible: true });

    chooseFile = () => {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, response => {
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
                    isVisisble: true,
                    isModalVisible: false,
                    filetype:response.type,
                    fileName:response.fileName
                });
            }
        });
    };
    libraryPicker = () => {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
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
                    isVisisble: true,
                    isModalVisible: false,
                    fileType:response.type,
                    fileName:response.fileName

                });
            }
        });
    }
    handleChange() {
        //Opening Document Picker
        DocumentPicker.show({
                filetype: [DocumentPickerUtil.images()]},
            (error, response) => {
                this.setState({ fileUri: response.uri });
                this.setState({ fileType: response.type });
                this.setState({ fileName: response.fileName });
                this.setState({ fileSize: response.fileSize });

               
            }
        );
        this.setState({
            isAttachedVisible: true,
            isModalVisible: false,
        })
    }
    allImages = () => {
        const { isModalVisible, isVisible, text, fileName, filePath, fileUri, fileType, isAttachedVisible } = this.state;
        if (isVisible) {
            console.log(this.state.fileName || this.state.fileType ? 'File Name\n' + this.state.fileName : 'john')
            return (
                <View>

               
                <View style={styles.testpannel}>
                    <View style={styles.testpannel}>

                        <View style={styles.testpannel2}>
                            <View style={{ flexDirection: 'row', margin: 3, width: 30, height: 30, }}>
                                <Icon name='file-pdf-o' size={20} style={{ color: 'white', padding: 5 }} />

                            </View>
                            <View style={{ flexDirection: 'row', margin: 2, width: 200, height: 50, }}>
                                <Text style={styles.text}> {this.state.filePath ? this.state.fileName : null}</Text>

                            </View>
                            <View style={{ flexDirection: 'row', width: 70, height: 50, }}>

                                <TouchableHighlight
                                    onPress={() => alert('are u sure?')}
                                    style={styles.text1} >
                                    <Icon name='edit' size={20} style={{ color: 'white', paddingTop: 5 }} />
                                </TouchableHighlight>


                                <TouchableHighlight
                                    onPress={() => alert('are u sure?')}
                                    style={styles.text1} >
                                    <Icons name='delete' size={20} style={{ color: 'white', paddingTop: 5 }} />
                                </TouchableHighlight>

                                <TouchableHighlight
                                    onPress={() => alert('do u really want to share this?')}
                                    style={styles.text1}>
                                    <Icon name='share' size={20} style={{ color: 'white', paddingTop: 5 }} />
                                </TouchableHighlight>



                            </View>



                        </View>
                    </View>

                </View>
                </View>

              
            )

        } else if (isAttachedVisible) {
            return (
                <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                    <Text style={styles.text}>
                        {this.state.filePath ? 'File Name\n' + this.state.filePath : 'john'}
                    </Text>
                </View>
            )

        }
   
    }
    render() {
        const { certificates } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.image1}>
                        {this.allImages()}
                    </View>

                    {certificates.map((item, i) => {
                        console.log(item.id)
                        return (
                            <View key={i}>
                                <View style={styles.testpannel}>

                                    <View style={styles.testpannel2}>
                                    <View style={{ flexDirection: 'row',margin:2,width: 30, height: 50,}}>
                                            <Icon name='file-pdf-o' size={20} style={{ color: 'white', padding: 5}} /> 

                                        </View>
                                        <View style={{ flexDirection: 'row',margin:2,width: 190, height: 50, }}>
                                            <Text style={styles.text}>  {item.name}</Text>

                                        </View>
                                        <View style={{flexDirection:'row',margin:2,width: 60, height: 50,}}>
                                       
                                            <TouchableHighlight
                                                onPress={() => alert('are u sure?')}
                                                style={styles.text1} >
                                                <Icon name='edit' size={20} style={{ color: 'white', paddingTop: 5 }} />
                                            </TouchableHighlight>
                                      
                                      
                                            <TouchableHighlight
                                                onPress={() => alert('are u sure?')}
                                                style={styles.text1} >
                                                <Icons name='delete' size={20} style={{ color: 'white', paddingTop: 5 }} />
                                            </TouchableHighlight>
                                      
                                            <TouchableHighlight
                                                onPress={() => alert('do u really want to share this?')}
                                                style={styles.text1}>
                                                <Icon name='share' size={20} style={{ color: 'white', paddingTop: 5 }} />
                                            </TouchableHighlight>
                                       


                                        </View>
                                       


                                    </View>
                                </View>


                            </View>

                        )
                    })}

                </ScrollView>
                <TouchableOpacity
                    //onPress = {()=>this.props.navigation.navigate('addCertificate')}
                    onPress={this.toggleModal}
                    style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>

                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modal}>
                        <View style={styles.main}>
                            <TouchableOpacity
                                style={styles.loginScreenButton}
                                onPress={this.handleChange.bind(this)}>
                                <Icons name = 'file1' size = {24} style={{ textAlign: 'center',}}/>
                                <Text style={styles.loginText}>Filen</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.loginScreenButton}
                                onPress={this.chooseFile}>
                                <Icon name = 'camera' size = {24}  style={{ textAlign: 'center',}}/>
                                <Text style={styles.loginText}>Kamera</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.loginScreenButton}
                                onPress={this.libraryPicker.bind(this)}>
                                <Icon name = 'picture-o' size = {24}  style={{ textAlign: 'center',}}/>
                                <Text style={styles.loginText}>Photos</Text>
                            </TouchableOpacity>


                        </View>
                        <View style={styles.main}>
                           




                        </View>

                    </View>

                </Modal>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    testpannel: {
       
        justifyContent:'center',
        flexDirection:'column'
      
    },
    testpannel2: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        backgroundColor: '#E53128',
        marginLeft: 10,
        marginTop: 10,
        paddingTop:20,
     
        height: 80
    },
    
    text: {
        color: 'white',
        marginLeft: 9,
        marginRight: 9,
        textAlign: 'center',
        fontSize: 15,
        marginBottom:3,
      

    },
    text1: {
       
        marginLeft: 6,
        marginRight: 6,
    

    },

    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 40,
        backgroundColor: '#E53128',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    },
    main: {
        flexDirection: 'row',
        margin: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: 'black',
        width: 200,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black'
    },
    loginScreenButton: {
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'rgba(103,103,103,1)',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginScreenButton2: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    uploadAvatar: {
        width: 50,
        height: 50
    },
    modal: {
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: 80,
        width: '100%',
        backgroundColor: 'white',

    }

})