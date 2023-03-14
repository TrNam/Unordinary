import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';

// Colors, Fonts and Icons
import {COLORS} from '../../assets/colors';
import { FONTS } from '../../assets/fonts';
import { ICONS } from '../../assets/icons';

const SECTIONS = [
    {
        header: 'Preferences',
        items: [
            { id:'language', icon: ICONS.language, label: 'Language', type: 'select' }, // English, Vietnamese, Tamil, Mandarin, French, Korean
            { id:'weightUnits', icon: ICONS.language, label: 'Weight Units', type: 'select' },// lbs, kg, stones, etc.
            { id:'nightMode', icon: ICONS.night, label: 'Night Mode', type: 'toggle' },
        ],
    },
    {
        // TODO - add icons
        header: 'For You',
        items: [
            { id:'progressPhotos', icon: ICONS.language, label: 'Take Progress Photos', type: 'toggle' },
            { id:'weightTrack', icon: ICONS.night, label: 'Track your weights', type: 'toggle' },
        ],
    },
    {
        header: 'Help',
        items: [
            { id:'about', icon: ICONS.about, label: 'About Us', type: 'link' },
            { id:'contact', icon: ICONS.contact, label: 'Contact Us', type: 'link' },
        ]
    },
]

export default function SettingsScreen() {
    const [form, setForm] = React.useState({
        language: 'English',
        nightMode: true,
    });


    function Row(props) {
        return(
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Image source={props.icon} style={styles.icon}/>
                </View>
    
                <Text style={styles.rowLabel}>{props.label}</Text>
    
                <View style={styles.rowSpacer}/>
    
                {props.type === 'select' && (
                    <Text style={styles.rowValue}>{form[props.id]}</Text>
                )}
    
                {props.type === 'toggle' &&
                    <Switch 
                        value={form[props.id]} 
                        onValueChange={value =>
                            setForm({...form, [props.id]: value})
                        }
                    />
                   
                }
    
                {['select', 'link'].includes(props.type) && (
                    <View style={styles.iconContainer}>
                        <Image 
                            source={ICONS.arrowRight}
                            style={{tintColor:COLORS.brightGrey, width:19, height:19,}}
                        />
                    </View>
                )}
    
            </View>
        )
    }


    return(
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Settings</Text>
                    <Text style={styles.subtitle}>Update your preferences here</Text>
                </View>

                {SECTIONS.map(({ header, items }) => (
                    <View style={styles.section} key={header}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionHeaderText}>{header}</Text>
                        </View>

                        <View style={styles.sectionBody}>
                            {items.map(({ label, id, type, icon }, index) => (
                                <View style={[styles.rowWrapper, index === 0 && { borderTopWidth: 0 }]} key={id}>

                                    {['select', 'link'].includes(type) && (
                                        <TouchableOpacity onPress={() => {
                                            // handle onPress
                                        }}>
                                            <Row id={id} label={label} type={type} icon={icon}/>
                                        </TouchableOpacity>
                                    )}

                                    {type === 'toggle' && (
                                        <Row id={id} label={label} type={type} icon={icon}/>
                                    )}

                                </View>
                            ))}
                            
                        </View>

                    </View>
                ))}

            </ScrollView>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBg,
    },
    container: {
        paddingVertical: 24,
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    title: {
        fontSize: FONTS.titleSize,
        fontWeight: FONTS.titleWeight,
        color: COLORS.white,
    },
    subtitle: {
        fontSize: FONTS.subtitleSize,
        fontWeight: FONTS.subtitleWeight,
        color: COLORS.grey,
    },
    section: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    sectionHeaderText: {
        fontSize: FONTS.headerSize,
        fontWeight: FONTS.headerWeight,
        color: COLORS.darkGrey,
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    rowWrapper: {
        paddingLeft: 24,
        borderTopWidth: 1,
        borderColor: COLORS.primaryBg,
        backgroundColor: COLORS.secondaryBg,
    },
    row: {
        height: 50,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        paddingRight: 24,
    },
    rowLabel: {
        fontSize: FONTS.bodySize,
        fontWeight: FONTS.bodyWeight,
        color: COLORS.white,
    },
    rowSpacer: {
        flex: 1,
    },
    rowValue: {
        fontSize: FONTS.bodySize,
        color: COLORS.darkGrey,
        marginRight: 4,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 22,
        height: 22,
        marginRight: 12,
        tintColor: COLORS.white,
    }
});