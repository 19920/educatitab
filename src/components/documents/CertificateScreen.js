import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import ImagePicker from 'react-native-image-picker';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import DocumentScanner from 'react-native-document-scanner';



export default class CertificateScreen extends Component {
    constructor(props) {
        super()
        this.state = {
            certificates: ['Betyg Grundskolan 9:an', 'Intygg arbete Blixtin', 'Intyg praktik Your voice'],
            isVisisble: false,
            isAttachedVisible:false,
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
            backgroundColor: 'red',
            fontWeight: '100'
        },

        headerTitleStyle: {
            fontWeight: '300',
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            flexGrow: 1,

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
                    isModalVisible: false
                });
            }
        });
    };
    libraryPicker=()=>{
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
                    isModalVisible: false
                });
            }
        });
    }
    handleChange() {
        //Opening Document Picker
        DocumentPicker.show(
            {
                filetype: [DocumentPickerUtil.images()],
                //All type of Files DocumentPickerUtil.allFiles()
                //Only PDF DocumentPickerUtil.pdf()
                //Audio DocumentPickerUtil.audio()
                //Plain Text DocumentPickerUtil.plainText()
            },
            (error, res) => {
                this.setState({ fileUri: res.uri });
                this.setState({ fileType: res.type });
                this.setState({ fileName: res.fileName });
                this.setState({ fileSize: res.fileSize });

                console.log('res : ' + JSON.stringify(res));
                console.log('URI : ' + res.uri);
                console.log('Type : ' + res.type);
                console.log('File Name : ' + res.fileName);
                console.log('File Size : ' + res.fileSize);
            }
        );
        this.setState({
            isAttachedVisible:true,
            isModalVisible: false
        })
    }
    allImages = () => {
        const { isModalVisible, isVisible, text, fileName, filePath, fileUri, fileType,isAttachedVisible } = this.state;
        if (isVisible) {
            return (
                <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                    <Image source={this.state.filePath} style={styles.uploadAvatar} />
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
                        return (
                            <View  key={i}>
                                <View style={styles.testpannel}>
                                    <Icon name='file-pdf-o' size={24} style={{ color: 'white' }} />
                                    <View  style={styles.testpannel2}>

                                        <Text style={styles.text}>{item}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableHighlight
                                                onPress={() => alert('are u sure?')}
                                                style={styles.icons}>
                                                <Icons name='delete' size={20} style={{ color: 'white', textAlign: 'right' }} />
                                            </TouchableHighlight>
                                            <TouchableHighlight
                                                onPress={() => alert('do u really want to share this?')}
                                                style={styles.icons}>
                                                <Icon name='share' size={20} style={{ color: 'white', textAlign: 'right' }} />
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
                                <Text style={styles.loginText}>Filen</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.loginScreenButton}
                                onPress={this.chooseFile}>
                                <Text style={styles.loginText}>Kamera</Text>
                            </TouchableOpacity>


                        </View>
                        <View style={styles.main}>
                            <TouchableOpacity
                                style={styles.loginScreenButton}
                                onPress={this.libraryPicker.bind(this)}>
                                <Text style={styles.loginText}>Photos</Text>
                            </TouchableOpacity>

                            


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
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'rgba(103,103,103,1)',
        borderRadius: 10,
        opacity: 1,
        margin: 10,
        flexDirection: 'column'


    },
    testpannel2: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,





    },
    text: {
        color: 'white',
        marginLeft: 9,
        marginRight: 9,
        textAlign: 'center',

    },
    icons: {
        paddingLeft: 10
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 40,
        backgroundColor: 'red',
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
        backgroundColor: '#1E6738',
        borderRadius: 10,
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