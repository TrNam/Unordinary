import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

// Colors, Fonts and Icons
import {COLORS} from '../../assets/colors';
import { FONTS } from '../../assets/fonts';
import { ICONS } from '../../assets/icons';

const TABS = [
    // TODO - change icons
    { name: "Today", icon: ICONS.workouts},
    { name: 'Previous', icon: ICONS.routines},
    { name: 'Progress', icon: ICONS.routines},
]

export default function TrackScreen({}) {
    const [value, setValue] = React.useState(0);

    return(
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.tabs}>
                {TABS.map(({ name, icon }, index) => {
                    const isActive = value === index
                    return (
                        <View
                            key={index}
                            style={[styles.tabWrapper, isActive && { borderColor: COLORS.white },
                        ]}>
                            <TouchableOpacity onPress={() => setValue(index)}>
                                <View style={styles.tab}>
                                    <Image 
                                        source={icon}
                                        style={[{tintColor: COLORS.darkGrey, width:16, height:16,}, isActive && {tintColor: COLORS.white}]}
                                    />
                                    <Text style={[styles.tabText, isActive && { color: COLORS.white }]}>{name}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBg,
    },
    tabs: {
        flexDirection: 'row',
        padding: 16,
    },
    tabWrapper: {
        flex: 1,
        borderColor: COLORS.darkGrey,
        borderBottomWidth: 2,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        position: 'relative',
        overflow:'hidden', 
    },
    tabText: {
        fontSize: FONTS.headerSize, 
        fontWeight: FONTS.headerWeight,
        color: COLORS.darkGrey,
        marginLeft: 5,
    }
});