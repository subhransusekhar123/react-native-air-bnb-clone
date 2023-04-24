import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Experience() {
  return (
    <View style={{padding:10}}>
      <Text style={styles.experienceHeader}>Discover Airbnb Experiences</Text>
      <ImageBackground
        style={styles.experienceBgImage}
        imageStyle={{ borderRadius: 6}}
        source={{
            uri:"https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"
        }}
      >
        <Text style={styles.bgHeaderText}>
            Things to do on your Trip
        </Text>

        <Pressable style={styles.Pressable}>
            <Text style={styles.PressableText}>Experience</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    experienceHeader:{
        fontSize:20,
        fontWeight:"600"
    },
    experienceBgImage:{
        width:"99%",
        height: 400,
        resizeMode:"contain",
        marginRight:"auto",
        marginLeft:"auto",
        marginTop:10,
        
        
    },
    bgHeaderText:{
        fontSize:30,
        color: "white",
        fontWeight:"bold",
        textAlign:"left",
        margin:10
    },
    Pressable:{
        padding:7,
        backgroundColor:"white",
        width:170,
        marginTop:16,
        borderRadius:4,
        margin:10,
        marginTop:0
    },
    PressableText:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
        textAlign:'center'
    }
})