import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';


const Explore = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("https://www.jsonkeeper.com/b/4G1G")
                .then(ele => setData(ele.data))
                .catch(err => console.log(err))
        }

        fetchData();
    })
    return (
        <View style={styles.explore}>
            <Text style={styles.exploreText}>Explore</Text>
            <SafeAreaView>
                <FlatList
                    numColumns={2}
                    style={styles.flatListCardContainer}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.flatCard}>
                                <Image
                                    source={{ uri: item.img }}
                                    style={styles.flatCardImg}
                                />
                                <View style={styles.flatCardTextContainer}>
                                    <Text style={styles.flatCardPlaceText}>{item.location}</Text>
                                    <Text style={styles.flatCardDistance}>{item.distance}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    explore: {
        padding: 10
    },
    exploreText: {
        fontSize: 20,
        fontWeight: "600"
    },
    flatCard: {
        flexDirection: "row",
        alignItems: "center",
        margin: 8,
        width: 170
    },

    flatCardTextContainer: {
        justifyContent: "center",
        marginLeft: 7
    },
    flatCardPlaceText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    flatCardDistance: {
        fontSize: 14,
        fontWeight: "500"
    },
    flatListCardContainer: {
    },
    flatCardImg: {
        width: 50,
        height: 50,
        borderRadius: 5
    }
})