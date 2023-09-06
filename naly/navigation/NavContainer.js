import * as React from 'react';
import { View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Colors and Icons
import { COLORS } from '../assets/colors';
import { ICONS } from '../assets/icons';

// Styles
import { styles } from '../styles/NavContainer.component.style';
// var s = require('../styles/NavContainer.component.style');

// Screens
import HomeScreen from './screens/HomeScreen';
import EatScreen from './screens/EatScreen';
import TimerScreen from './screens/TimerScreen';
import TrackScreen from './screens/TrackScreen';
import WorkoutsScreen from './screens/WorkoutsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Screen names
const homeName = 'Home';
const eatName = 'Eat';
const timerName = 'Timer';
const trackName = 'Track Workouts';
const workoutsname = 'Workouts';
const settingsName = 'Settings';

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
                        iconImg = ICONS.home;
                    } else if (rn === workoutsname) {
                        iconImg = ICONS.muscles;
                    } else if (rn === trackName) {
                        iconImg = ICONS.calendar;
                    } else if (rn === timerName) {
                        iconImg = ICONS.timer;
                    } else if (rn === eatName) {
                        iconImg = ICONS.eat;
                    }

                    return <View style={styles.tabNav}>
                        <Image
                            source={iconImg}
                            resizeMode='contain'
                            style={[styles.iconImage, {tintColor: focused ? COLORS.white : COLORS.grey}]}
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
                //     backgroundColor: COLORS.primaryBg,
                //     elevation: 0,
                //     shadowOpacity: 0, // or shadowColor: 'transparent',
                //     paddingVertical: 24,
                // },

                tabBarShowLabel: false,
                headerShown: false,
                // tabBarActiveTintColor: '',
                // tabBarInactiveTintColor: '',
                // tabBarLabelStyle:{fontSize: 15},
                tabBarStyle:{backgroundColor: COLORS.primaryBg, borderTopWidth: 0},

            })}
            >
                {/* <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}}/> */}
                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={workoutsname} component={WorkoutsScreen}/>
                <Tab.Screen name={trackName} component={TrackScreen}/>
                <Tab.Screen name={timerName} component={TimerScreen}/>
                <Tab.Screen name={eatName} component={EatScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}