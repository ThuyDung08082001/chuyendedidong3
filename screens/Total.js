import React, { useEffect, useState } from "react";
import Button from '../components/Button';
import {
    StyledFormHome,
    StyledDrinkTouchable,
    StyledDrinkTouchableImage,
    StyledDrinkTouchableText,
    StyledDrinkTouchablePrice,
    StyledDrinkTouchableAdd,
    StyledDrinkTouchableDelete,
    StyledDrinkTouchableEdit,
    Line,
    StyledDrinkTouchableSmallText,
    StyledDrinkTouchableBtn,
    Colors,
    PageTitle,
    SHBZ,
    TouchableHomeLogo,
    StyledHomeBrownLogo,
    JustWhiteTheme,
} from "../components/styles"
import { Alert, LogBox, ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, Ionicons, Fontisto } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Qty from "./Qty";


//Colors 
const { light_brand, neon_light_brand, primary, brand, BR_blur, JT_brand, OJT_brand } = Colors;
//Colors 
const Total = ({ navigation }) => {
    return (
        <View style={styles.container} >
           <PageTitle style={{ color: brand  ,marginTop:"10%" }}>Totail</PageTitle>
            <ScrollView style={{ flex: .6, marginTop: 20 }} >
                <StyledFormHome style={styles.twocl} >
                    <JustWhiteTheme style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Qty style={styles.IDZone} />
                    </JustWhiteTheme>
                </StyledFormHome>

            </ScrollView>
            <View style={{ flex: .3125, marginTop: "15%" }} >
                <Line />
                <View style={{ flexDirection: 'row', marginHorizontal: '5%', justifyContent: 'space-between', marginBottom:'5%'}} >
                    <Text style={{ textTransform: 'uppercase', fontSize: 20, fontWeight: 'bold' }}>Total:</Text>
                    <Text style={{ textTransform: 'uppercase', fontSize: 20, fontWeight: 'bold' }}>50$</Text>
                </View>
                <Button title="Submit" onPress={() => navigation.navigate('Notification')} style={{ marginTop: 20 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'column',
    },
    twocl: {
        flex: .8,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    TouchableImage: {
        padding: 20,
        shadowColor: "#000000",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },
    drop_icons: {
        position: "absolute",
        top: "50%",
        left: "20%",
        fontSize: 30,
        color: primary,

    },
    checkbox: {
        height: 50,
        width: 50,
        borderRadius: 15,
        position: 'absolute',
        left: 320,
        top: 25,
        borderColor: brand,
        borderWidth: 1.5,
        backgroundColor: brand,
    },
    logo: {
        paddingTop: "25%",
        fontSize: 25,
        textAlign: "center",
        color: primary,
    },
    IDZone: {
        marginTop:'40%',
    },
});

export default Total;