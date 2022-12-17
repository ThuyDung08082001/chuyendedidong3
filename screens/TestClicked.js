import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
const {
    brand,
    darkLight,
    primary,
    blur,
    neon_light_brand,
    red,
    neon_blur,
    green,
    blue,
} = Colors;
import { MaterialCommunityIcons, Fontisto, Ionicons } from "@expo/vector-icons";
import { Colors, SDTDeleteTableB, SDTTableBtn } from '../components/styles';
import { Alert } from 'react-native';

const TestClicked = ({ navigation, clicked, setClicked }) => {
    return (
        <View style={styles.container} >
            {/* <TouchableOpacity style={ clicked ? [styles.Touch1, styles.shadow] : [styles.Touch, styles.shadow] }>
        <View style={[styles.item]}>
          <MaterialCommunityIcons style={styles.icons} name="desk" />
          <View style={styles.textArea}>
            <Text numberOfLines={1} style={styles.nametext}>
             Khu a
            </Text>
            <Text numberOfLines={1} style={styles.nametext}>
             Ban 3
            </Text>
          </View>
        </View>
        <SDTTableBtn onPress={() => Alert.alert("Đã Chọn")}>
          <Ionicons style={styles.drop_icons} name="checkmark" />
        </SDTTableBtn>
        <SDTDeleteTableB onPress={() => navigation.navigate('DrinkChoosing')}>
          <Ionicons style={styles.drop_icons} name="arrow-forward" />
        </SDTDeleteTableB>
      </TouchableOpacity> */}
            <Text style={clicked ? { color: brand, fontSize: 50 } : { color: green, fontSize: 50 }}>Abc</Text>
        </View>
    )
}

export default TestClicked

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    Touch: {
        width: "90%",
        backgroundColor: primary,
        borderRadius: 25,
        marginHorizontal: "5%",
        marginVertical: "2%",
    },
    Touch1: {
        width: "90%",
        backgroundColor: brand,
        borderRadius: 25,
        marginHorizontal: "5%",
        marginVertical: "2%",
    },
    scrollView: {
        flex: 1,
        marginTop: "15%",
        backgroundColor: neon_blur,
    },
    item: {
        width: "120%",
        height: 90,
        flexDirection: "row",
        padding: "3%",
        justifyContent: "center",
        alignItems: "center",
    },
    textArea: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    nametext: {
        fontSize: 19,
        textAlign: "left",
        fontWeight: "bold",
        color: brand,
        marginLeft: "2%",
    },
    text: {
        marginHorizontal: "7%",
        fontWeight: "bold",
        fontSize: 17,
    },
    shadow: {
        elevation: 10,
        shadowColor: "#1F2937",
        shadowOpacity: 0.25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3,
        },
    },
    green: {
        backgroundColor: green,
    },
    blue: {
        backgroundColor: blue,
    },
    icons: {
        fontSize: 60,
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
    dropDown: {
        height: 40,
        width: 200,
        borderWidth: 1.5,
        borderColor: brand,
        position: "absolute",
        borderRadius: 5,
        backgroundColor: primary,
        left: "5%",
    },
})