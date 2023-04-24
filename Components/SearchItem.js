import { Pressable, StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchItem = ({ data }) => {
    const [state, setState] = React.useState(true);
    const navigation = useNavigation();
    console.log(data,1)
    return (
        <Pressable style={styles.press} onPress={() => navigation.navigate("Reserve", {
            id: data.id,
            img: data.img,
            description: data.description,
            lat: data.lat,
            location: data.location,
            person: data.person,
            price: data.price,
            reveiew: data.reveiew,
            star: data.star,
            title: data.title,
            total: data.total,
            distance: data.distance,
            image: data.image,
        })}>
            <View style={styles.card}>
                <Image
                    source={{ uri: data.img }}
                    style={styles.cardImg}
                />
                {
                    state ?
                        <AntDesign name="hearto" size={24} color="white" style={styles.heartBtn} /> :
                        <AntDesign name="heart" size={24} color="#fd5c63" style={styles.heartBtn} />
                }

                <View style={styles.cardTextcontainer}>
                    <View>
                        <Text style={styles.headerText}>Private room in center of London</Text>
                        <Text style={styles.distanceText}>3211 kilometers away</Text>
                    </View>

                    <View>
                        <Text style={styles.costText}>$30 / night</Text>
                        <Text style={styles.date}>dec 12 - 20</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default SearchItem

const styles = StyleSheet.create({
    card: {
        width: "95%",
        height: 350,
        position: "relative",
    },
    cardImg: {
        width: "100%",
        height: "80%",
        borderRadius: 6
    },
    cardTextcontainer: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    press: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heartBtn: {
        position: "absolute",
        top: 20,
        right: 20
    },
    headerText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    costText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    distanceText: {
        fontSize: 12,
        fontWeight: "bold"
    },
    date: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "right"
    }
})