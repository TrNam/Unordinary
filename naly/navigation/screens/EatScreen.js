import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function EatScreen({}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#222831'}}>
            <Text
            style={{ fontSize: 26, fontWeight: 'bold'}}> Food Prep Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});