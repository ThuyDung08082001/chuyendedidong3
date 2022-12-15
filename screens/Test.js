
import React from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyledFormHome,
  Colors,
  WelcomeContainer,
  StyledTouchable,
  StyledTouchableImage,
  StyledTouchableText,
  WhiteZone,
  WZText,
  PageLogo,
  StyledContainer,
  InnerContainer,
  FormHome,
  PageTitle,
  HomePageImage,
  TouchableHomeImage,
  StyledHomeBrownImage,
  THButton,
  THtext,
  HelloText,
  BLtext,
} from "../components/styles"
import { Alert, ScrollView, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";


//Colors 
const { light_brand, neon_light_brand, primary, brand, BR_blur, JT_brand, OJT_brand } = Colors;
const Home = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <StyledContainer style={styles.container} >
      <InnerContainer>
        <HomePageImage style={styles.TouchableImage} resizeMode="cover" source={require('../assets/image/b.png')} />
        <SearchBar searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
          styles={styles.SearchBar}
        />
        <HelloText>Xin Chào!</HelloText>
        <TouchableHomeImage onPress={() => { navigation.navigate('Login'), Alert.alert("Already Log out") }}>
          <StyledHomeBrownImage resizeMode="cover" source={require('../assets/image/a.png')} />
        </TouchableHomeImage>
        <View style={styles.FlexRow}>
          <View style={styles.FlexItem}>
            <THButton style={[styles.TouchableImage, styles.RightColor]}
              onPress={() => { navigation.navigate('TableChoosing'), console.log('TableChoosing') }}>
              <MaterialCommunityIcons style={styles.icons} name='checkbox-marked-circle-outline' />
              <THtext numberOfLines={2}> Check In </THtext>
            </THButton>
            <THButton style={[styles.TouchableImage, styles.LeftColor]}
              onPress={() => { navigation.navigate('TableChoosing'), console.log('TableChoosing') }}>
              <MaterialCommunityIcons style={styles.icons} name='calendar-check' />
              <THtext numberOfLines={2}> Date Regist </THtext>
            </THButton>
          </View>
          <View style={styles.FlexItem}>
            <THButton style={[styles.TouchableImage, styles.LeftColor]}
              onPress={() => { navigation.navigate('TableChoosing'), console.log('TableChoosing') }}>
              <MaterialCommunityIcons style={styles.icons} name='coffee-to-go' />
              <THtext numberOfLines={2}> Working </THtext>
            </THButton>
            <THButton style={[styles.TouchableImage, styles.RightColor]}
              onPress={() => { navigation.navigate('TableChoosing'), console.log('TableChoosing') }}>
              <MaterialCommunityIcons style={styles.icons} name='account-cash' />
              <THtext numberOfLines={2}> Salary </THtext>
            </THButton>
          </View>
        </View>
      </InnerContainer>
      <View style={{ flex: .15, alignItems: 'center', justifyContent: 'center', marginBottom: "-10%" }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={[styles.belowBtn, styles.right]}>
              <Ionicons style={styles.drop_icons} name='md-list-circle-outline' />
              <BLtext numberOfLines={2}> Take Away </BLtext>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: 'white' }}
            onPress={() => { Alert.alert("Already Check In")}}
          >
            <View style={[styles.belowBtn]}>
              <Ionicons style={[styles.drop_icons, styles.top]} name='checkmark-circle-outline' />
              <BLtext numberOfLines={2}> Check In </BLtext>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={[styles.belowBtn, styles.left]}>
              <Ionicons style={styles.drop_icons} name='md-notifications-circle-outline' />
              <BLtext numberOfLines={2}> Notification </BLtext>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </StyledContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BR_blur,
  },
  FlexRow: {
    flex: 0.5,
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: "row",
    marginTop: "-15%"
  },
  FlexItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightColor: {
    backgroundColor: brand,
  },
  LeftColor: {
    backgroundColor: JT_brand,
  },
  TouchableImage: {
    elevation: 10,
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: .5,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2
    }
  },
  icons: {
    position: "absolute",
    fontSize: 40,
    color: primary,
    right: "10%",
    top: "10%",
    paddingTop: "5%",
  },
  belowBtn: {
    flex: 1,
    bottom: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  drop_icons: {
    fontSize: 40,
    color: JT_brand,
    marginVertical: '2%',
  },
  left: {
    left: "5%",
  },
  right: {
    right: "5%",
  },
  top: {
    fontSize: 50,
  },

});

export default Home;


