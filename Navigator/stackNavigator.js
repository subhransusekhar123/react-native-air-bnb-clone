import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreens from '../Screens/HomeScreens';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../Screens/SearchScreen';
import ReservationScreen from '../Screens/ReservationScreen';
import ConfirmScreen from '../Screens/ConfirmScreen';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreens}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        headerTitleStyle: {
                            fontWeight: "bold",
                            fontSize: 20,
                        }
                    }}
                />

                <Stack.Screen
                    name="Reserve"
                    component={ReservationScreen}
                    options={{
                        headerStyle:{
                            backgroundColor:"#fd5c63",
                        },
                        headerTintColor:"#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                            fontSize: 20,
                        },
                        gestureEnabled: true,
                        headerShown:false
                    }}
                />

                <Stack.Screen
                    name='confirm'
                    component={ConfirmScreen}
                    options={{
                        title:"confirm & pay",
                        headerStyle:{
                            backgroundColor:"#fd5c63",
                        },
                        headerTintColor:"#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                            fontSize: 20,
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;

const styles = StyleSheet.create({})