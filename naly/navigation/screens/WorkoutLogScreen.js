import * as React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';





export default function WorkoutLogScreen({navigation}) {
        const [search, setSearch] = useState('');
        const [filteredDataSource, setFilteredDataSource] = useState([]);
        const [masterDataSource, setMasterDataSource] = useState([]);
        useEffect(() => {
          const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
              'X-RapidAPI-Key': '2bfcd4fbf4msh9f7588ffaf475c3p1b7907jsn9e82dc8c8ab1',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
          axios.request(options).then(function(response){
                console.log('hi',response.data)
                setFilteredDataSource(response.data);
                setMasterDataSource(response.data);
            }).catch(function (error) {
                console.error(error);
            });     
        }, []);
      
        const searchFilterFunction = (text) => {
          // Check if searched text is not blank
          if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(
              function (item) {
                const itemData = item ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
          } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
          }
        };
      
        const ItemView = ({item}) => {
          return (
            // Flat List Item
            <Text
              style={styles.itemStyle}
              onPress={() => getItem(item)}>
              {item.id}
              {'.'}
              {item.name.toUpperCase()}
            </Text>
          );
        };
      
        const ItemSeparatorView = () => {
          return (
            // Flat List Item Separator
            <View
              style={{
                height: 0.5,
                width: '100%',
                backgroundColor: '#C8C8C8',
              }}
            />
          );
        };
      
        const getItem = (item) => {
          // Function for click on an item
          alert('Id : ' + item.name + ' Title : ' + item.name);
        };
        const styles = StyleSheet.create({
            container: {
              backgroundColor: 'white',
            },
            itemStyle: {
              padding: 10,
            },
            textInputStyle: {
              height: 40,
              borderWidth: 1,
              paddingLeft: 20,
              margin: 5,
              borderColor: '#009688',
              backgroundColor: '#FFFFFF',
            },
          });
        return (
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
              <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search Here"
              />
              <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#222831'}}>
                <Text
                style={{ fontSize: 26, fontWeight: 'bold'}}>Workout Log Screen</Text>
            </View>
          </SafeAreaView>
        );
   
}
  