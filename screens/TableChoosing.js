import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,ImageBackground } from 'react-native'
import React from 'react'
import { Colors, OLPic, PageTitle, SHBZ, StyledDrinkTouchableBtn, StyledHomeBrownLogo, TouchableHomeLogo } from '../components/styles';
const { brand, darkLight, primary, blur, neon_light_brand, red, neon_blur, green, blue } = Colors;
import { MaterialCommunityIcons, Fontisto, Ionicons } from '@expo/vector-icons';



const TableChoosing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode="cover" source={'../assets/image/br3.png'} />
        <PageTitle style={{ color: brand, marginTop: "10%" }}>TableChoosing</PageTitle>
        <ScrollView style={{ flex: .6 }} >
          <TouchableOpacity style={[styles.Touch, styles.shadow]}>
            <View style={[styles.item]}>
              <MaterialCommunityIcons style={styles.icons} name='desk' />
              <View style={styles.textArea}>
                <Text numberOfLines={1} style={styles.nametext}>Bàn 1</Text>
                <Text numberOfLines={1} style={styles.nametext}>Khu A</Text>
              </View>
            </View>
            <StyledDrinkTouchableBtn onPress={() => navigation.navigate('DrinkChoosing')} >
              <Ionicons style={styles.drop_icons} name='ios-arrow-forward-circle-outline' />
            </StyledDrinkTouchableBtn>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Touch, styles.shadow]}>
            <View style={[styles.item]}>
              <MaterialCommunityIcons style={styles.icons} name='desk' />
              <View style={styles.textArea}>
                <Text numberOfLines={1} style={styles.nametext}>Bàn 1</Text>
                <Text numberOfLines={1} style={styles.nametext}>Khu A</Text>
              </View>
            </View>
            <StyledDrinkTouchableBtn onPress={() => navigation.navigate('DrinkChoosing')} >
              <Ionicons style={styles.drop_icons} name='ios-arrow-forward-circle-outline' />
            </StyledDrinkTouchableBtn>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Touch, styles.shadow]}>
            <View style={[styles.item]}>
              <MaterialCommunityIcons style={styles.icons} name='desk' />
              <View style={styles.textArea}>
                <Text numberOfLines={1} style={styles.nametext}>Bàn 1</Text>
                <Text numberOfLines={1} style={styles.nametext}>Khu A</Text>
              </View>
            </View>
            <StyledDrinkTouchableBtn onPress={() => navigation.navigate('DrinkChoosing')} >
              <Ionicons style={styles.drop_icons} name='ios-arrow-forward-circle-outline' />
            </StyledDrinkTouchableBtn>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Touch, styles.shadow]}>
            <View style={[styles.item]}>
              <MaterialCommunityIcons style={styles.icons} name='desk' />
              <View style={styles.textArea}>
                <Text numberOfLines={1} style={styles.nametext}>Bàn 1</Text>
                <Text numberOfLines={1} style={styles.nametext}>Khu A</Text>
              </View>
            </View>
            <StyledDrinkTouchableBtn onPress={() => navigation.navigate('DrinkChoosing')} >
              <Ionicons style={styles.drop_icons} name='ios-arrow-forward-circle-outline' />
            </StyledDrinkTouchableBtn>
          </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default TableChoosing

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Touch: {
    width: '90%',
    backgroundColor: primary,
    borderRadius: 25,
    marginHorizontal: "5%",
    marginVertical: "2%",
  },
  scrollView: {
    flex: 1,
    marginTop: "5%",
    backgroundColor: neon_blur,
  },
  item: {
    width: "120%",
    height: 90,
    flexDirection: "row",
    padding: '3%',
    justifyContent: "center",
    alignItems: "center",
  },
  textArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  nametext: {
    fontSize: 23,
    textAlign: "left",
    fontWeight: 'bold',
    color: brand,
    marginLeft: '7%',
  },
  text: {
    marginHorizontal: "7%",
    fontWeight: 'bold',
    fontSize: 17,
  },
  shadow: {
    elevation: 10,
    shadowColor: "#1F2937",
    shadowOpacity: .25,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 3
    }
  },
  green: {
    backgroundColor: green,
  },
  blue: {
    backgroundColor: blue,
  },
  icons: {
    fontSize: 75,
    color: brand,
  },
  logo: {
    paddingTop: "5%",
    fontSize: 25,
    textAlign: "center",
    color: primary,
  },
  drop_icons: {
    position: "absolute",
    top: "50%",
    left: "20%",
    fontSize: 30,
    color: primary,

  },
})