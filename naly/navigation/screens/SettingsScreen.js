import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const SECTIONS = [
    {
        header: 'Preferences',
        items: [
            { id:'language', icon: '', label: 'Language', type: 'select' },
            { id:'darkMode', icon: '', label: 'Dark Mode', type: 'toggle' },
        ],
    },
    {
        header: 'Help',
        items: [
            { id:'about', icon: '', label: 'About Us', type: 'link' },
            { id:'contact', icon: '', label: 'Contact Us', type: 'link' },
        ]
    },
]

export default function SettingsScreen() {
    // const [form, setForm] = useState({
    //     language: 'English',
    //     darkMode: true,
    // });
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
                                    <TouchableOpacity onPress={() => {
                                        // handle onPress
                                    }}>
                                        <View style={styles.row}>
                                            {/* Add icon here */}
                                            <Text style={styles.rowLabel}>{label}</Text>

                                            <View style={styles.rowSpacer}/>

                                            {type === 'select' && (
                                                <Text style={styles.rowValue}></Text>
                                            )}
                                        </View>
                                    </TouchableOpacity>
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
        backgroundColor:'#222831'
    },
    container: {
        paddingVertical: 24,
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#EEEEEE',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
    },
    section: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    sectionHeaderText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#a7a7a7',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    rowWrapper: {
        paddingLeft: 24,
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: '#fff',
    },
    row: {
        height: 50,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        paddingRight: 24,
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000'
    },
    rowSpacer: {
        flex: 1,
        backgroundColor: 'red'
    },
});
  