import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function WorkoutLogScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#222831'}}>
            <StatusBar  
                backgroundColor = "#222831"  
                hidden = {false}    
            />  
            <Text
            style={{ fontSize: 26, fontWeight: 'bold'}}>Workout Log Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
  