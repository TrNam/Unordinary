import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TimerScreen({}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#222831'}}>
            <Text
            style={{ fontSize: 26, fontWeight: 'bold'}}> Timer Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
  