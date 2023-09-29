import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {launchCamera} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
// import {Avatar,Card,Title,Paragraph,Button} from 'react-native-paper'

const CreateAdScreen = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');

    const postData = async () => {
      console.log('postData pressed')
      try {
        await firestore().collection('ads')
        .add({
          name,
          desc,
          year,
          price,
          phone,
          image,
          uid: auth().currentUser.uid
        })
      } catch (error) {
        Alert.alert('Kuch galat ba ho, fir se try kara!')
      }
      
    }

    const openCamera = () => {
      launchCamera({quality: 0.5}, (fileobj) => {
        // console.log('callback=:',callback)
        //need to create one reference path where image will upload in firebase storage
        const uploadTask = storage().ref().child(`/items/${Date.now()}`).putFile(fileobj.uri)
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            if (progress == 100) {
              alert('uploaded')
            }

          }, 
          (error) => {
            // Handle unsuccessful uploads
            alert('something went wrong while uploading image')
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log('File available at', downloadURL);
              setImage(downloadURL);
            });
          }
        );
      });
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          
            <Text style={styles.text}>Create Ad</Text>
            <View style={styles.inputView}>
                <TextInput 
                style={styles.inputText}
                //   placeholder="Login"
                value={name}
                onChangeText={newText => setName(newText)}
                // defaultValue={name}
                />
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
            //   placeholder="Login"
              value={desc}
              onChangeText={newText => setDesc(newText)}
              // defaultValue={desc}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
            //   placeholder="Login"
              value={year}
              onChangeText={newText => setYear(newText)}
              // defaultValue={year}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
            //   placeholder="Login"
              value={price}
              onChangeText={newText => setPrice(newText)}
              // defaultValue={price}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
            //   placeholder="Login"
              value={phone}
              onChangeText={newText => setPhone(newText)}
              // defaultValue={phone}
            />
            </View>
            <TouchableOpacity
                onPress = {() => openCamera()}
                style={styles.btn}>
                  <Icon name="camera" size={20} color="white" />
                <Text style={styles.forgotAndSignUpText}>Upload Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {() => postData()}
                style={styles.btn} icon="camera"
                disabled={image?false:true}>
                <Text style={styles.loginText} disabled={image?false:true}>Post </Text>
            </TouchableOpacity>
            
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    inputText:{
        height:50,
        color:"white"
    },
    inputView: {
        width:"80%",
        backgroundColor:"#3AB4BA",
        borderRadius:20,
        height:50,
        marginBottom:10,
        justifyContent:"center",
        alignItems: "center",
        padding:20
    },
    text: {
        marginBottom:50
    },
    button: {
        backgroundColor: "#3AB4BA",
    },
    btn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 10,
        height: 50,
        borderRadius: 20,
    }
})
export default CreateAdScreen;