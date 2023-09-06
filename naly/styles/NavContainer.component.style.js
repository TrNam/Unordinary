import { StyleSheet } from 'react-native';
import { COLORS } from '../assets/colors';

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: COLORS.primaryBg,
    },
    tabNav: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImage: {
        width: 25,
        height: 25,
    },
//     In case we want the same header for all screens
    // headerTitleStyles: {
    //     fontSize: FONTS.titleSize,
    //     fontWeight: FONTS.titleWeight,
    //     color: COLORS.white,
    // },
    // headerSubtitleStyles: {
    //     fontSize: FONTS.subtitleSize,
    //     fontWeight: FONTS.subtitleWeight,
    //     color: COLORS.darkGrey,
    // },
    // headerStyles: {
    //     paddingHorizontal: 24,
    //     marginBottom: 12,
    // },
});

export { styles }