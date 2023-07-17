import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator()

export const StackNav = () => {

   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               headerStyle: {
                  backgroundColor: "blue",
               },
               headerTintColor: 'white',
               headerTitleStyle: {
                  fontSize: 25
               }
            }}
         >
            <Stack.Screen name="Login" component={Login} 
               options={{
                  headerTitle: () => <Button title='Login' onPress={() => console.warn("Button Clicked")}/>,
                  headerRight: () => <Header />,
                  title: "Login"
               }}
            />
            <Stack.Screen name="Home" component={Home}
               options={{
                  title: "Home"
               }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

const Header = () => {
   return (
      <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
         <Text style={{color: "white"}}>Name:</Text>
         <TextInput placeholder='Name' style={{color: "white"}} />
      </View>
   )
}

const Home = (props) => {
   console.warn(props.route.params)
   return <View style={[styles.centeredContainer]} >
      <Text style={[styles.headingText]}>This is Home Page</Text>
      <Text style={[styles.headingText]}>Name: {props.route.params.name}</Text>
      <Text style={[styles.headingText]}>Age: {props.route.params.age}</Text>
   </View>
}

const Login = (props) => {
   return <View style={[styles.centeredContainer]}>
      <Text style={[styles.headingText]}>This is Login Page</Text>
      <Button title="Go to Home Page" onPress={() => props.navigation.navigate("Home", {name: "Anil", age: 30})} />
   </View>
};

const Login2 = (props) => {
   return <View style={[styles.centeredContainer]}>
      <Text style={[styles.headingText]}>Login</Text>
   </View>
};

const SignUp = () => {
   return <View style={[styles.centeredContainer]}>
      <Text style={[styles.headingText]}>Sign Up</Text>
   </View>
};

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {

   return (
      <NavigationContainer>
         <Tab.Navigator>
            <Tab.Screen name="Login" component={Login2} />
            <Tab.Screen name="SignUp" component={SignUp} />
         </Tab.Navigator>
      </NavigationContainer>
   )
};

const styles = StyleSheet.create({
   centeredContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   },
   headingText: {
      fontSize: 25,
   }
})
