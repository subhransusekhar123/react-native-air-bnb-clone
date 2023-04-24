import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'

//date picker
import DateRangePicker from "rn-select-date-range";
import moment from "moment";


//emoji
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ConfirmScreen from './ConfirmScreen';


// fd5c63
const ReservationScreen = ({navigation}) => {
  const [selectedRange, setRange] = useState({});
  //calculate day and night
  const day = moment(selectedRange.firstDate)
  const night = moment(selectedRange.secondDate);
  const diffTime = night.diff(day);
  const absoluteTime = Math.ceil(diffTime/86400000);
  console.log(diffTime,absoluteTime,"difftime");

  const Route = useRoute();

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Image source={{ uri: Route.params.img }} style={styles.reserveImg} />
        <View style={[styles.header, styles.marginLayout]}>
          <Text style={styles.headerText}>Stay at the spacious Edwardian house</Text>
          <View style={styles.headerInfo}>
            <AntDesign name="star" size={20} color="#fd5c63" style={styles.headerInfoStar} />
            <Text style={styles.headerInfoRating}>4.2</Text>
            <Text style={styles.headerInfoAbout}>Private room in center of London</Text>
          </View>
        </View>

        <View style={[styles.diamondSection, styles.marginLayout]}>
          <View style={styles.diamondSectionTextContainer}>
            <Text style={styles.diamondSectionHeaderText}>This is a rare find.</Text>
            <Text style={styles.diamondSectionText}>Melati's on Airbnb is usually fully booked</Text>
          </View>

          <FontAwesome name="diamond" size={24} color="#fd5c63" />

        </View>

        <View style={[styles.hostedSection, styles.marginLayout]}>
          <View style={styles.hostedSectionFirstBox}>
            <Text style={styles.hostedSectionText}>Hosted By Melati</Text>
            <Image source={{ uri: Route.params.image }} style={styles.hostedSectionImage} />
          </View>
          <Text style={styles.hostedSectionInfoText}>{Route.params.description}</Text>
        </View>

        <View style={[styles.featureSection, styles.marginLayout]}>
          <View style={styles.featureSubSection}>
            <Entypo name="home" size={24} color="black" />
            <View style={styles.featureSubSectionTextContainer}>
              <Text style={styles.featureSubSectionBoldText}>Entire Home</Text>
              <Text style={styles.featureSubSectionLightText}>You'll have the treehouse to yourself.</Text>
            </View>
          </View>

          <View style={styles.featureSubSection}>
            <Feather name="smile" size={24} color="black" />
            <View style={styles.featureSubSectionTextContainer}>
              <Text style={styles.featureSubSectionBoldText}>Entire Home</Text>
              <Text style={styles.featureSubSectionLightText}>You'll have the treehouse to yourself.</Text>
            </View>
          </View>

          <View style={styles.featureSubSection}>
            <EvilIcons name="location" size={24} color="black" />
            <View style={styles.featureSubSectionTextContainer}>
              <Text style={styles.featureSubSectionBoldText}>Entire Home</Text>
              <Text style={styles.featureSubSectionLightText}>You'll have the treehouse to yourself.</Text>
            </View>
          </View>

          <View style={styles.featureSubSection}>
            <Entypo name="calendar" size={24} color="black" />
            <View style={styles.featureSubSectionTextContainer}>
              <Text style={styles.featureSubSectionBoldText}>Entire Home</Text>
              <Text style={styles.featureSubSectionLightText}>You'll have the treehouse to yourself.</Text>
            </View>
          </View>
        </View>

        <View style={[styles.BedSection, styles.marginLayout]}>
          <Text style={styles.BedSectionHeaderText}>Where You'll Sleep</Text>
          <View style={styles.BedSectionBed}>
            <Ionicons name="bed" size={24} color="black" />
            <View>
              <Text style={styles.BedBold}>Bedroom</Text>
              <Text style={styles.BedLight}>1 double bed</Text>
            </View>
          </View>
        </View>

        <View style={[styles.placeOffers, styles.marginLayout]}>
          <Text style={styles.offerHeader}>What this place Offers</Text>
          <View style={styles.offerContainer}>
            <View style={styles.offer}>
              <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="black" />
              <Text style={styles.offerText}>Kitchen</Text>
            </View>
            <View style={styles.offer}>
              <MaterialCommunityIcons name="wifi" size={24} color="black" />
              <Text style={styles.offerText}>Wifi</Text>
            </View>
            <View style={styles.offer}>
              <MaterialCommunityIcons name="parking" size={24} color="black" />
              <Text style={styles.offerText}>Parking</Text>
            </View>
            <View style={styles.offer}>
              <MaterialCommunityIcons name="paw" size={24} color="black" />
              <Text style={styles.offerText}>Pets</Text>
            </View>
            <View style={styles.offer}>
              <MaterialCommunityIcons name="pump" size={24} color="black" />
              <Text style={styles.offerText}>Free Parking </Text>
            </View>
          </View>


        </View>

        <View style={[styles.calenderContainer, styles.marginLayout]}>
          <DateRangePicker
            onSelectDateRange={(range) => {
              setRange(range);
            }}
            blockSingleDateSelection={true}
            responseFormat="YYYY-MM-DD"
            maxDate={moment()}
            minDate={moment().subtract(100, "days")}
            selectedDateContainerStyle={styles.selectedDateContainerStyle}
            selectedDateStyle={styles.selectedDateStyle}
          />
        </View>

        <View style={[styles.Datecontainer, styles.marginLayout]}>
          {
            !selectedRange.firstDate && !selectedRange.secondDate ? (null) :
              <>
                <Text>first date: {selectedRange.firstDate}</Text>
                <Text>second date: {selectedRange.secondDate}</Text>
              </>
          }

        </View>

      
        
      </View>
    </ScrollView>
    <Pressable style={styles.outerPressable}>
          <Text style={{fontSize:18, fontWeight:"bold"}}>{Route.params.price}</Text>
          <Pressable style={styles.innerPressable} onPress={()=> navigation.navigate("confirm",{
             id: Route.params.id,
             img: Route.params.img,
             description: Route.params.description,
             lat: Route.params.lat,
             location: Route.params.location,
             person: Route.params.person,
             price: Route.params.price,
             reveiew: Route.params.reveiew,
             star: Route.params.star,
             title: Route.params.title,
             total: Route.params.total,
             distance: Route.params.distance,
             image: Route.params.image,
             date: selectedRange,
             no_of_days: absoluteTime
          })} disabled={!selectedRange.firstDate && !selectedRange.secondDate}>
            <Text style={styles.innerPressbaleText}>Reserve</Text>
          </Pressable>
        </Pressable>
    </>
  )
}

export default ReservationScreen

const styles = StyleSheet.create({
  marginLayout: {
    marginHorizontal: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  reserveImg: {
    width: "100%",
    height: 200
  },
  header: {
    justifyContent: "center",
    paddingVertical: 10,
    gap: 4
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  headerInfoRating: {
    fontSize: 12,
    fontWeight: "bold"
  },
  headerInfoAbout: {
    fontSize: 12,
    fontWeight: "bold",
    color: "grey"
  },
  diamondSection: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  diamondSectionHeaderText: {
    fontSize: 14,
    fontWeight: "bold"
  },
  diamondSectionText: {
    fontSize: 12,
    color: "grey"
  },
  hostedSection: {
    justifyContent: 'center',
    paddingVertical: 10
  },
  hostedSectionInfo: {
    flexDirection: "row"
  },
  hostedSectionInfoText: {
    fontSize: 12,
    color: "#fd5c63",
    fontWeight: 'bold'
  },
  hostedSectionFirstBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  hostedSectionImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  hostedSectionText: {
    fontSize: 18,
    fontWeight: 600
  },
  featureSection: {
    justifyContent: 'center',
    gap: 10
  },
  featureSubSection: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },
  featureSubSectionBoldText: {
    fontWeight: "bold"
  },
  featureSubSectionLightText: {
    color: "grey",
    fontWeight: "bold"
  },
  BedSectionHeaderText: {
    fontSize: 18,
    fontWeight: "600"
  },
  BedSectionBed: {
    borderWidth: 1,
    width: 140,
    borderRadius: 8,
    padding: 10,
    gap: 5
  },
  BedBold: {
    fontWeight: "bold"
  },
  BedLight: {
    fontWeight: "400",
    color: "grey"
  },
  BedSection: {
    gap: 10
  },
  offer: {
    flexDirection: "row",
    gap: 5
  },
  offerHeader: {
    fontSize: 18,
    fontWeight: "600"
  },
  offerContainer: {
    padding: 10,
    gap: 10
  },
  offerText: {
    fontWeight: "400"
  },
  calenderContainer: {
    flex: 1
  },
  Datecontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  outerPressable:{
    backgroundColor:"#AFDBF5",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:15,
  },
  innerPressable:{
    backgroundColor:"#fd5c63",
    padding:10
  },
  innerPressbaleText:{
    color:"white"
  }
})