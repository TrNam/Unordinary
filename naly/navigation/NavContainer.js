import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import FoodPrepScreen from './screens/FoodPrepScreen';
import TimerScreen from './screens/TimerScreen';
import WorkoutLogScreen from './screens/WorkoutLogScreen';

// Screen names
const homeName = 'Home';
const settingsName = 'Settings'; 
const foodPrepName = 'Food Prep';
const timerName = 'Timer';
const workoutLogName = 'Workout Log';

const Tab = createBottomTabNavigator();

export default function NavContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconImg;
                    let rn = route.name;

                    if (rn === homeName) { 
                        iconImg = require('../assets/icons/home.png');
                    } else if (rn === settingsName) {
                        iconImg = require('../assets/icons/settings.png');
                    } else if (rn === workoutLogName) {
                        iconImg = require('../assets/icons/workout.png');
                    } else if (rn === timerName) {
                        iconImg = require('../assets/icons/timer.png');
                    } else if (rn === foodPrepName) {
                        iconImg = require('../assets/icons/eat.png');
                    }

                    return <View style={styles.tabNavStyles}>
                        <Image
                            source={iconImg}
                            resizeMode='contain'
                            style={[styles.iconImageStyles, {tintColor: focused ? '#EEEEEE' : 'grey'}]}
                        />
                    </View>
                },
                tabBarShowLabel: false,
                headerShown: false,
                // tabBarActiveTintColor: 'tomato',
                // tabBarInactiveTintColor: 'grey',
                // tabBarLabelStyle:{fontSize: 15},
                tabBarStyle:{backgroundColor: '#222831', borderTopWidth: 0, padding:10},

            })}
            >
                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={settingsName} component={SettingsScreen}/>
                <Tab.Screen name={workoutLogName} component={WorkoutLogScreen}/>
                <Tab.Screen name={timerName} component={TimerScreen}/>
                <Tab.Screen name={foodPrepName} component={FoodPrepScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    navContainerStyles: {
        backgroundColor: '#222831'
    },
    tabNavStyles: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImageStyles: {
        width: 25,
        height: 25,
    },
});