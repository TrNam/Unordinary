import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

export default function TrackScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#222831'}}>
            <Text
            style={{ fontSize: 26, fontWeight: 'bold'}}>Track Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
  