import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../components/styles";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { io } from "socket.io-client/dist/socket.io.js";
<<<<<<< HEAD
import url from "../Url";
// const socket = io("http://172.20.10.4:3000", {
//   jsonp: false,
// });
=======
>>>>>>> main

const socket = io("https://coffee-app.up.railway.app", {
  jsonp: false,
});

const OnWorking = (navigation) => {
<<<<<<< HEAD
  const [drinksOrder, setDrinksOrder] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    getAllDrinkOrder();
  }, [check]);
  socket.on("sever up data drink order", () => {
    console.log("Client nhận data drink order từ sever: ");
    setCheck(!check);
  });
  const getAllDrinkOrder = async () => {
    await fetch(url + "drinkorder/list/decrease/createat")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.data);
        var data = res.data;
        setDrinksOrder(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  // xuất lên giao diện.map()
  const drinkOrderAll = drinksOrder.map((item, index) => {
    //console.log(item.table);
    return (
      <TouchableOpacity style={[styles.Touch, styles.shadow]}>
        <View style={[styles.item]}>
          <Image
            style={styles.Image}
            resizeMode="cover"
            source={{ uri: `${item.drink.image}` }}
          />
          <View style={styles.textArea}>
            <Text numberOfLines={1} style={styles.nametext}>
              {item.drink.name}
            </Text>
            <View style={styles.ntnText}>
              <Text style={styles.text}>Ly : {item.qty}</Text>
              {item.table && <Text style={styles.text}>{item.table.name}</Text>}
            </View>
          </View>
          <View style={styles.btnArea}>
            <TouchableOpacity style={[styles.btn, styles.green]}>
              <MaterialCommunityIcons
                style={styles.btnText}
                name="clipboard-check-outline"
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.blue]}>
              <MaterialCommunityIcons
                style={styles.btnText}
                name="cash-check"
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>{drinkOrderAll}</ScrollView>
    </SafeAreaView>
  );
};

=======
  const socket = io("http://192.168.1.144:3000", {
    jsonp: false,
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={[styles.Touch, styles.shadow]}>
          <View style={[styles.item]}>
            <Image
              style={styles.Image}
              resizeMode="cover"
              source={require("../assets/image/cf.png")}
            />
            <View style={styles.textArea}>
              <Text numberOfLines={1} style={styles.nametext}>
                Cafe Sữa
              </Text>
              <View style={styles.ntnText}>
                <Text style={styles.text}>Ly : 1</Text>
                <Text style={styles.text}>Bàn: 1</Text>
              </View>
            </View>
            <View style={styles.btnArea}>
              <TouchableOpacity style={[styles.btn, styles.green]}>
                <MaterialCommunityIcons style={styles.btnText} name="clipboard-check-outline" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.blue]}>
                <MaterialCommunityIcons style={styles.btnText} name="cash-check" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

>>>>>>> main
export default OnWorking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Touch: {
    width: "85%",
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
    width: "100%",
    height: 90,
    flexDirection: "row",
    padding: "3%",
    // borderWidth: 1,
    // borderColor:darkLight,
  },
  Image: {
    width: 85,
    height: 70,
    borderRadius: 15,
    marginLeft: "-10%",
  },
  textArea: {
    flex: 0.5,
    flexDirection: "column",
    marginLeft: "-5%",
  },
  nametext: {
    fontSize: 23,
    textAlign: "left",
    fontWeight: "bold",
    color: brand,
    marginTop: "5%",
    marginLeft: "7%",
  },
  ntnText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4%",
  },
  text: {
    marginHorizontal: "7%",
    fontWeight: "bold",
<<<<<<< HEAD
    fontSize: 15,
=======
    fontSize: 17,
>>>>>>> main
  },
  btnArea: {
    flex: 0.5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    width: "40%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "5%",
    borderRadius: 8,
  },
  btnText: {
    color: primary,
    fontSize: 30,
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
});
