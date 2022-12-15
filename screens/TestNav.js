// import { StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView, SafeAreaView, } from 'react-native'
// import React from 'react'
// import {
//     StyledFormHome,
//     Colors,
//     WelcomeContainer,
//     StyledTouchable,
//     StyledTouchableImage,
//     StyledTouchableText,
//     WhiteZone,
//     WZText,
//     PageLogo,
//     StyledContainer,
//     InnerContainer,
//     FormHome,
//     PageTitle,
//     HomePageImage,
//     TouchableHomeImage,
//     StyledHomeBrownImage,
//     THButton,
//     THtext,
//     HelloText,
// } from "../components/styles"
// import SearchBar from "../components/SearchBar";
// import { useState } from "react";
// import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// const { light_brand, neon_light_brand, primary, brand, BR_blur, JT_brand, OJT_brand } = Colors;


// const TestNav = (navigation) => {
//     const [searchPhrase, setSearchPhrase] = useState("");
//     const [clicked, setClicked] = useState(false);
//     return (
//         <View style={{ flex: 1, backgroundColor: 'gray' }}>
//             <View style={{ flex: 9, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center', }}>
//                 <SafeAreaView>
//                     <StyledContainer style={styles.container} >
//                         <InnerContainer>
//                             <HomePageImage style={styles.TouchableImage} resizeMode="cover" source={require('../assets/image/b.png')} />
//                             <SearchBar searchPhrase={searchPhrase}
//                                 setSearchPhrase={setSearchPhrase}
//                                 clicked={clicked}
//                                 setClicked={setClicked}
//                                 styles={styles.SearchBar}
//                             />
//                             <HelloText>Xin Chào!</HelloText>
//                             <TouchableHomeImage onPress={() => { navigation.navigate('Login'), Alert.alert("Already Log out") }}>
//                                 <StyledHomeBrownImage resizeMode="cover" source={require('../assets/image/a.png')} />
//                             </TouchableHomeImage>
//                             <View style={styles.FlexRow}>
//                                 <View style={styles.FlexItem}>
//                                     <THButton style={[styles.TouchableImage, styles.RightColor]}
//                                         onPress={() => { navigation.navigate('TableChoosing'), console.log('TableChoosing') }}>
//                                         <MaterialCommunityIcons style={styles.icons} name='checkbox-marked-circle-outline' />
//                                         <THtext numberOfLines={2}> Check In </THtext>
//                                     </THButton>
//                                     <THButton style={[styles.TouchableImage, styles.LeftColor]}
//                                         onPress={() => { navigation.navigate('TableChoosing'), console.log('TableChoosing') }}>
//                                         <MaterialCommunityIcons style={styles.icons} name='calendar-check' />
//                                         <THtext numberOfLines={2}> Date Regist </THtext>
//                                     </THButton>
//                                 </View>
//                                 <View style={styles.FlexItem}>
//                                     <THButton style={[styles.TouchableImage, styles.LeftColor]}
//                                         onPress={() => { navigation.navigate('TableChoosing'), console.log('TableChoosing') }}>
//                                         <MaterialCommunityIcons style={styles.icons} name='coffee-to-go' />
//                                         <THtext numberOfLines={2}> Working </THtext>
//                                     </THButton>
//                                     <THButton style={[styles.TouchableImage, styles.RightColor]}
//                                         onPress={() => { navigation.navigate('TableChoosing'), console.log('TableChoosing') }}>
//                                         <MaterialCommunityIcons style={styles.icons} name='account-cash' />
//                                         <THtext numberOfLines={2}> Salary </THtext>
//                                     </THButton>
//                                 </View>

//                             </View>
//                         </InnerContainer>
//                     </StyledContainer >
//                 </SafeAreaView>
//             </View>


//             <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', }}>
//                 <View style={{ flex: 1, flexDirection: 'row' }}>
//                     <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
//                         <View>
//                             <Text>
//                                 ...Settings
//                             </Text>
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
//                         <View>
//                             <Text>
//                                 ...Settings
//                             </Text>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default TestNav

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: BR_blur,
//         marginTop:-40,
//     },
//     FlexRow: {
//         flex: 0.5,
//         justifyContent: 'center',
//         textAlign: 'center',
//         flexDirection: "row",
//         marginTop: "-10%"
//     },
//     FlexItem: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     RightColor: {
//         backgroundColor: OJT_brand,
//     },
//     LeftColor: {
//         backgroundColor: JT_brand,
//     },
//     TouchableImage: {
//         elevation: 10,
//         padding: 20,
//         shadowColor: "#000000",
//         shadowOpacity: .5,
//         shadowRadius: 2,
//         shadowOffset: {
//             height: 2,
//             width: 2
//         }
//     },
//     icons: {
//         position: "absolute",
//         fontSize: 40,
//         color: primary,
//         right: "10%",
//         top: "10%",
//         paddingTop: "5%",
//     },
// })