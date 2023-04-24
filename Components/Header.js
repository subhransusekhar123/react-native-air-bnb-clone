import { ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
    const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={styles.imageBackground} 
        source={{
            uri:"https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"
        }}
      >
        <View style={styles.bgImageInputContainer}>
            <AntDesign name="search1" size={24} color="#c71585" />
            <TextInput style={styles.bgImageInputContainerInput} placeholder='Where you want to go ?'/>
        </View>

        <Pressable style={styles.pressable} onPress={()=>{navigation.navigate("Search")}}>
            <Text style={styles.pressableText}>I am flexible</Text>
        </Pressable>

        
        <View style={styles.notSureTextContainer}>
            <Text  style={styles.notsureText}>Not Sure Where To Go ?</Text>
            <Text  style={styles.notsureText}>Perfect</Text>
        </View>
        </ImageBackground>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    imageBackground:{
        width: "100%",
        height:540,
    },
    backgroundImageText:{
        color:"#ffffff",
    },
    bgImageInputContainer:{
        flexDirection:"row",
        backgroundColor:"white",
        maxWidth:280,
        alignItems:'center',
        borderRadius:8,
        padding:6 ,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: 30
    },
    bgImageInputContainerInput:{
        marginLeft:10,
        fontSize:18
    },
    pressable:{
        backgroundColor:"white",
        width:200,
        borderRadius:12,
        marginBottom:"auto",
        marginTop:"auto",
        marginLeft:"auto",
        marginRight:"auto"
    },
    pressableText:{
        padding:10,
        color:"#c71585",
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 18
    },
    notSureTextContainer:{
        backgroundColor:"black",
        paddingVertical:12
    },
    notsureText:{
        color:"white",
        fontSize: 22,
        textAlign:"center",
        fontWeight:"bold"
    }



})