import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
// import {TextInput } from "react-native-paper";
import auth from '@react-native-firebase/auth';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userSignup = async () => {
        if (!email || !password) {
            Alert.alert('Please enter the details');
            return
        }
        try {
            await auth().createUserWithEmailAndPassword(email,password);
        } catch (err) {
            Alert.alert('Somethings went wrong');
        }
        
        setEmail('');
        setPassword('');
    }
    
    return (
        <>
        <View style={styles.container}>
            {/* <View style={styles.box1}>
                <Image style={{ width: 200, height: 200 }} source={require('../assets/login_logo.png')} />
            </View> */}
            <Text style={styles.title}>Dhirti!</Text>
            <View style={styles.inputView}>  
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    value={email}
                    onChangeText={newText => setEmail(newText)}
                    // defaultValue={email}
                />
            </View>
            <View style={styles.inputView}>  
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    secureTextEntry
                    // keyboardType="numeric"
                    value={password}
                    onChangeText={newText => setPassword(newText)}
                    // defaultValue={password}
                />
            </View>
            {/* <TouchableOpacity
                onPress = {'onPressForgotPassword'}>
                <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                onPress = {() => userSignup()}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>SIGNUP </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {() => navigation.goBack()}>
                <Text style={styles.forgotAndSignUpText}>Login?</Text>
            </TouchableOpacity>
        </View></>
    )
}

const styles = StyleSheet.create({
    box1: {
        alignItems: "center",
        backgroundColor: '#4FD3DA',
    },
    container: {
        flex: 1,
        backgroundColor: '#4FD3DA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputView:{
        width:"80%",
        backgroundColor:"#3AB4BA",
        borderRadius:20,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        alignItems: "center",
        padding:20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom:40,
        color: '#fb5b5a'
    },
    inputText:{
        height:50,
        color:"white"
    },
    forgotAndSignUpText:{
        color:"white",
        fontSize:13
    },
    loginBtn: {
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
export default SignupScreen;