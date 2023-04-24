import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cards = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>Inspiration for your Next trip.</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <Pressable style={styles.pressable}>
                    <Image
                     style={styles.pressableImg}
                        source={{
                            uri: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg"
                        }}
                    />
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardPlaceName}>Himalaya</Text>
                        <Text style={styles.cardDistance}>280km away</Text>
                    </View>
                </Pressable>

                <Pressable style={styles.pressable}>
                    <Image
                         style={styles.pressableImg}
                        source={{
                            uri: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg"
                        }}
                    />

                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardPlaceName}>Lonavala</Text>
                        <Text style={styles.cardDistance}>260km away</Text>
                    </View>
                </Pressable>

                <Pressable style={styles.pressable}>
                    <Image
                        style={styles.pressableImg}
                        source={{
                            uri: "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg"
                        }}
                    />

                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardPlaceName}>Himalaya</Text>
                        <Text style={styles.cardDistance}>280km away</Text>
                    </View>
                </Pressable>
            </ScrollView>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    card: {
        padding: 10
    },
    cardText: {
        fontSize: 20,
        fontWeight: 600
    },
    pressable: {
        marginRight: 10,
        marginTop: 10,
        width:190
    },
    pressableImg:{ 
            width: "100%",
            height: 150,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8
    },
    cardTextContainer:{
        backgroundColor:"black",
        paddingHorizontal:6,
    },
    cardPlaceName:{
        color:"white",
        fontSize:18,
        fontWeight:"bold"
    },
    cardDistance:{
        color:"white",
        fontSize:10,
        fontWeight:"bold",
        paddingBottom:10
    }

})