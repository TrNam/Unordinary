import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';

// Colors, Fonts and Icons
import {COLORS} from '../../assets/colors';
import { FONTS } from '../../assets/fonts';
import { ICONS } from '../../assets/icons';

export default function HomeScreen({navigation}) {
    return(
        <SafeAreaView style={styles.mainContainer}>

            <TouchableOpacity>
                <View>
                    <Image 
                        source={ICONS.settings}
                        style={{tintColor: COLORS.white, width:16, height:16,}}
                    />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: COLORS.primaryBg,
    },
});
  