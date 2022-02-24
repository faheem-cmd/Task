import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


import HomePageScreen from './HomePage';
import searchPageScreen from './SearchPage';
import SplashScreen from './SplashScreen';
import EmptyScreen from './Empty';
import RestuarentSingle from './RestuarentSingle/RestuarentSingle'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeBar = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { borderTopLeftRadius: 0 },
        }} tabBarOptions={{ showLabel: false }}>
            <Tab.Screen name="cart" options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="food" color={focused ? '#18AB32' : color} size={25} />
                ),
            }} component={HomePageScreen} />
            <Tab.Screen name="Empty" options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="cart" color={focused ? '#18AB32' : color} size={25} />
                ),
            }} component={EmptyScreen} />
        </Tab.Navigator>
    )

}

const Navigation = () => {
    return (

        <Stack.Navigator >
            <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
            <Stack.Screen name="HomePage" options={{ headerShown: false }} component={HomeBar} />
            <Stack.Screen name="SearchPage" options={{ headerShown: false }} component={searchPageScreen} />
            <Stack.Screen name="RestuarentSingle" options={{ headerShown: false }} component={RestuarentSingle} />


        </Stack.Navigator>
    );
};


export default Navigation