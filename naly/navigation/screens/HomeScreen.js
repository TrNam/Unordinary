import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#222831'}}>
            <StatusBar  
                backgroundColor = "#222831"  
                // barStyle = "dark-content"   
                hidden = {false}    
                // translucent = {true}  
            />  
            <Text
            style={{ fontSize: 26, fontWeight: 'bold'}}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
  