import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccount from './screens/CreateAccount.js'
import SignIn from './screens/SignIn';
import Search from './screens/Search'
import Home from './screens/Home';
import Details from './screens/Details'
import Search2 from './screens/Search2'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home} />
    <HomeStack.Screen name='Details' component={Details} />
  </HomeStack.Navigator>
)

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name='Search' component={Search} />
        <SearchStack.Screen name='Search2' component={Search2} />
  </SearchStack.Navigator>
)

export default () => {
return (

<NavigationContainer>
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
  </NavigationContainer>
)};




{/* <AuthStack.Navigator>
  <AuthStack.Screen name='SignIn' component={SignIn} options={{ title: 'Sign In'}}/>
  <AuthStack.Screen name='CreateAccount' component={CreateAccount} options={{ title: "Create Account"}}/>
  </AuthStack.Navigator>*/}
