import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth';

const AccountScreen = () => {
    return (
        <View>
            <Text>{auth().currentUser.email}</Text>
            <TouchableOpacity
                onPress = {() => auth().signOut()}
            >
                <Text>LOGOUT </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AccountScreen;