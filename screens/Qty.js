import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Colors } from '../components/styles';
const { light_brand, neon_light_brand, primary, brand, BR_blur, JT_brand, OJT_brand } = Colors;


const Qty = () => {
  const [valx, setValx] = useState(0);
  const setValue = () => {
    if (valx <= 0) {
      setValx(0);
    }
    else {
      setValx(valx - 1);
    }
  }
  return (

      <View style={[styles.IDButton]} >
        <TouchableOpacity onPress={() => setValue()}>
          <MaterialCommunityIcons style={{ color: brand, fontSize: 20, }} name='minus-thick' />
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 15, color: brand , fontSize: 20,}}>{valx}</Text>
        <TouchableOpacity onPress={() => setValx((valx) => valx + 1)} >
          <MaterialCommunityIcons style={{ color: brand, fontSize: 20, }} name='plus-thick' />
        </TouchableOpacity>
      </View>
  );
};
export default Qty

const styles = StyleSheet.create({
  IBtn: {

  },
  IDButton: {
    flex: 1,
    height:"80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "30%",
    // borderColor: brand,
    // borderWidth: 1.5,
    paddingHorizontal: "5%",
    backgroundColor: primary,
    borderRadius: 15,
    position: 'absolute',
    left:"-5%",
    top:'70%',
  },
  shadow: {
    elevation: 10,
    shadowColor: "#000000",
    shadowOpacity: .25,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 3
    },
  },
  },
)