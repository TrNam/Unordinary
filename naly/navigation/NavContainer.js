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
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                // labelStyle: { paddingBottom: 10, fontSize: 10},
                // style: {padding: 10, height: 70}
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let iconImg;
                    let rn = route.name

                    if (rn === homeName) {
                        iconName = homeName;
                        iconImg = '../assets/icons/home.png';
                    } else if (rn === settingsName) {
                        iconName = settingsName;
                        iconImg = '../assets/icons/settings.png';
                    } else if (rn === workoutLogName) {
                        iconName = workoutLogName;
                        iconImg = '../assets/icons/workout.png';
                    } else if (rn === timerName) {
                        iconName = timerName;
                        iconImg = '../assets/icons/timer.png';
                    } else if (rn === foodPrepName) {
                        iconName = foodPrepName;
                        iconImg = '../assets/icons/eat.png';
                    }

                    return <View style={styles.tabNavStyles}>
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode='contain'
                            style={styles.iconImageStyles}
                        />
                        {/* <Text>{iconName}</Text> */}
                    </View>
                }
            })}
            >
                {/* { <Tab.Screen name={homeName} component={HomeScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabNavStyles}>
                            <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode='contain'
                            style={styles.iconImageStyles}
                            />
                            <Text>Home</Text>
                        </View>
                    ),
                }}/> } */}
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

    },
    tabNavStyles: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImageStyles: {
        width: 25,
        height: 25
    }
});