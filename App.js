/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreateAdScreen from './src/screens/CreateAdScreen';
import HomeScreen from './src/screens/ListItemScreen';
import SignupScreen from './src/screens/SignupScreen';
import AccountScreen from './src/screens/AccountScreen';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import auth from '@react-native-firebase/auth';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
  },
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="signup" component={SignupScreen} options={{headerShown:false}} />
     </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'
        } else if (route.name === 'Create') {
          iconName = 'plus-circle';
        } else {
          iconName = 'user';
        }

        // You can return any component that you like here!
        return <Feather name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Create" component={CreateAdScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  const [user, setUser] =useState('');
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((userExit) => {
      if (userExit) {
        setUser(userExit);
      } else {
        setUser('');
      }
    })
    return unsubscribe //need to clean up our code while exiting app
  }, [])
  return (
    <NavigationContainer>
      {user ? <TabNavigator />:<AuthNavigator />}
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  )
}

const App = () =>  {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="deepskyblue" />
      <View style={styles.container}>
      
      {/* <LoginScreen /> */}
      {/* <CreateAdScreen /> */}
      {/* <HomeScreen /> */}
      <Navigation />

      </View>
        
      
    </>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
