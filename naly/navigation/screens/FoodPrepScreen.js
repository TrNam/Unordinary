import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function FoodPrepScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
            onPress={() => alert('This is the Food Prep Screen.')}
            style={{ fontSize: 26, fontWeight: 'bold'}}> Food Prep Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
  