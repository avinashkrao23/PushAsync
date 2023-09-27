import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
// import {Avatar,Card,Title,Paragraph,Button} from 'react-native-paper'

const CreateAdScreen = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Ad</Text>
            <View style={styles.inputView}>
                <TextInput 
                style={styles.inputText}
                //   placeholder="Login"
                value='name'
                onChangeText={newText => setName(newText)}
                // defaultValue={name}
                />
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
            //   placeholder="Login"
              value='desc'
              onChangeText={newText => setDesc(newText)}
              defaultValue={desc}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
            //   placeholder="Login"
              value='year'
              onChangeText={newText => setYear(newText)}
              defaultValue={year}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
            //   placeholder="Login"
              value='price'
              onChangeText={newText => setPrice(newText)}
              defaultValue={price}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
            //   placeholder="Login"
              value='phone'
              onChangeText={newText => setPhone(newText)}
              defaultValue={phone}
            />
            </View>
            <TouchableOpacity
                onPress = {'onPressForgotPassword'}
                style={styles.btn}>
                <Text style={styles.forgotAndSignUpText}>Upload Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {'onPressLogin'}
                style={styles.btn} icon="camera">
                    <Icon name="camera" size={20} color="white" />
                <Text style={styles.loginText}>Cemra </Text>
            </TouchableOpacity>
        </View>
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