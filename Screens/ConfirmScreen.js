import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const ConfirmScreen = () => {
    const [state, setState] = useState(0);
    const Route = useRoute();
    console.log(Route, "acah");
    const res = Route.params.price.replace(/\D/g, "");
    const serviceFee = 20;
    const tax = 45;
    console.log(res, serviceFee, tax, Route.params.no_of_days);
    const total = (guest) => {
        let hotelCharge = res * Route.params.no_of_days
        let totalCharge = hotelCharge + tax + serviceFee;
        return totalCharge * guest;
    }

    return (
        <ScrollView>
            <View style={styles.commonSpace}>
                <View style={styles.box}>
                    <Image source={{ uri: Route.params.img }} style={styles.boxImage} />
                    <View style={styles.rightTextBox}>
                        <Text style={styles.rightTextBoxSmall}>{Route.params.location}</Text>
                        <Text style={styles.rightTextBoxHeader}>{Route.params.title}</Text>
                        <Text style={styles.rightTextBoxSmall}>{Route.params.description}</Text>
                        <Text style={styles.rightTextBoxSmall}>{`${Route.params.star} rating`}</Text>
                    </View>
                </View>

                <View style={styles.rareFind}>
                    <View style={styles.rareFindTextContainer}>
                        <Text style={styles.rareFindTextContainerHeader}>This is a rare find.</Text>
                        <Text style={styles.rareFindTextContainerLine}>Melati's on Airbnb is usually fully booked.</Text>
                    </View>
                    <FontAwesome name="diamond" size={24} color="black" />
                </View>
            </View>

            <View style={styles.trip}>
                <Text style={styles.tripHeader}>Your Trip</Text>
                <View>
                    <Text style={styles.Date}>Dates</Text>
                    <Text style={styles.DateProp}>{`${Route.params.date?.firstDate} ${Route.params.date?.secondDate}`}</Text>
                </View>
                <View style={styles.guestContainer}>
                    <View>
                        <Text style={styles.Guest}>Guests</Text>
                        <Text style={styles.guestNumber}>{state} Guest</Text>
                    </View>
                    <View style={{ padding: 10, backgroundColor: "#fd5c63", width: 130, flexDirection: "row", justifyContent: "space-between", borderRadius: 6 }}>
                        <Pressable style={{ justifyContent: "center", alignItems: "center" }} onPress={() => {
                            if (state < 1) { setState(0) }
                            else { setState(state - 1) }
                        }}>
                            <Entypo name="minus" size={24} color="white" />
                        </Pressable>
                        <Text style={{ color: "white", fontWeight: "bold" }}>{state}</Text>
                        <Pressable onPress={() => setState(state + 1)}>
                            <Entypo name="plus" size={24} color="white" />
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.priceDetails}>
                <Text style={styles.Header}>Price Details</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.boldText}>{`${Route.params.price} * ${Route.params.no_of_days}`}</Text>
                    <Text style={styles.lightText}>{Route.params.price}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.boldText}>ServiceFee</Text>
                    <Text style={styles.lightText}>{serviceFee}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.boldText}>Tax</Text>
                    <Text style={styles.lightText}>{tax}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.boldText}>Total</Text>
                    <Text style={styles.lightText}>{total(state)}</Text>
                </View>

            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20 }}>Cancellation Policy</Text>

                <Text style={{ marginTop: 10, color: "gray", fontSize: 16 }}>
                    Free Cancellation for 48 hours, refund minus the service fee
                </Text>

                <Text style={{ marginTop: 10, color: "gray", fontSize: 16 }}>
                    Our policy does not cover policy disruptions caused by COVID-19
                </Text>
            </View>

            <Pressable style={{width:150,padding:10, backgroundColor:"#fd5c63", borderRadius: 8, justifyContent:"center", alignItems:"center",marginLeft:"auto", marginRight:"auto", margin:20}}>
                        <Text style={{color:"white", fontSize:16, fontWeight:"400"}}>Confirm & pay</Text>
            </Pressable>
        </ScrollView>
    )
}

export default ConfirmScreen;

const styles = StyleSheet.create({
    commonSpace: {
        borderBottomWidth: 5,
        borderColor: "grey",
        alignItems: "center",
        gap: 15,
        paddingBottom: 15,
    },
    box: {
        flexDirection: "row",
        gap: 10,
        padding: 15,
        alignItems: 'center',
    },
    boxImage: {
        width: 110,
        height: 110,
        borderRadius: 6
    },
    rightTextBoxSmall: {
        fontSize: 12,
        fontWeight: "bold",
        color: 'grey',
    },
    rightTextBoxHeader: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "bold"
    }
    , rightTextBox: {
        flex: 1,
        gap:4
    },
    rareFind: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
    },
    rareFindTextContainerHeader: {
        fontWeight: "bold"
    },
    rareFindTextContainerLine: {
        fontWeight: "bold",
        color: "grey"
    },
    trip: {
        padding: 15,
        paddingVertical: 15,
        gap: 15,
        borderBottomWidth: 5,
        borderColor: "grey",
    },
    tripHeader: {
        fontSize: 20,
        fontWeight: "bold"
    },
    Date: {
        fontWeight: "bold"
    },
    DateProp: {
        color: "grey"
    },
    Guest: {
        fontWeight: "bold"
    },
    guestNumber: {
        color: "grey"
    },
    guestContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    priceDetails: {
        padding: 15,
        gap: 15,
        borderBottomWidth: 4,
        borderColor: "grey"
    },
    Header: {
        fontSize: 18,
        fontWeight: "bold"
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    boldText: {
        fontWeight: 'bold'
    },
    lightText: {
        fontWeight: "bold",
        color: "grey"
    }
})