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
                // In case we want the same header for all screens
                // headerTitle: () => {
                //     let rn = route.name;
                //     let title;
                //     let subTitle;

                //     if (rn === settingsName) {
                //         title = settingsName;
                //         subTitle = 'Update your preference here';
                //     }

                //     return <View style={styles.headerStyles}>
                //         <Text style={styles.headerTitleStyles}>{title}</Text>
                //         <Text style={styles.headerSubtitleStyles}>{subTitle}</Text>
                //     </View>
                // },
                // headerStyle: {
                //     backgroundColor: '#222831',
                //     elevation: 0,
                //     shadowOpacity: 0, // or shadowColor: 'transparent',
                //     paddingVertical: 24,
                // },

                tabBarShowLabel: false,
                headerShown: false,
                // tabBarActiveTintColor: '',
                // tabBarInactiveTintColor: '',
                // tabBarLabelStyle:{fontSize: 15},
                tabBarStyle:{backgroundColor: '#222831', borderTopWidth: 0},

            })}
            >
                <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}}/>
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
//     In case we want the same header for all screens
    // headerTitleStyles: {
    //     fontSize: 32,
    //     fontWeight: '700',
    //     color: '#EEEEEE',
    // },
    // headerSubtitleStyles: {
    //     fontSize: 15,
    //     fontWeight: '500',
    //     color: '#929292',
    // },
    // headerStyles: {
    //     paddingHorizontal: 24,
    //     marginBottom: 12,
    // },
});