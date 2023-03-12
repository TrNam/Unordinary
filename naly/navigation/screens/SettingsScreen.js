import * as React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default function SettingsScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#222831'}}>
            <StatusBar  
                backgroundColor = "#222831"  
                hidden = {false}    
            />  
            <Text
            style={{ fontSize: 26, fontWeight: 'bold'}}>Settings Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
  