import * as React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import NavContainer from './navigation/NavContainer';

function App() {
  return(
    <View style={{flex: 1}}>
      <StatusBar
        barStyle='light-content'
        hidden={false}
        backgroundColor='#222831'
        translucent={true}
        
      ></StatusBar>
      <NavContainer></NavContainer>
    </View>
    
  )
}

export default App;