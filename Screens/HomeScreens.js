import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Explore from '../Components/Explore';
import Experience from '../Components/Experience';

const HomeScreens = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <Header/>
      <Cards/>
      <Explore/>
      <Experience/>
    </View>
    </ScrollView>
  )
}

export default HomeScreens ;