import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import data from "../search/search";
import { useNavigation } from '@react-navigation/native';
import SearchItem from '../Components/SearchItem';


const SearchScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Explore Airbnb",
            headerStyle:{
                backgroundColor:"#fd5c63",
            },
            headerTintColor:"#fff",
           
        })
    })
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator = {false}
        data={data}
        renderItem = {({item})=>(<SearchItem data = {item}/>)}
      />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})