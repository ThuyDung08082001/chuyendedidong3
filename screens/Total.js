import React, { useEffect, useState } from "react";
import Button from "../components/Button";
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
  SDTDeleteB,
} from "../components/styles";
import {
  Alert,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons, Ionicons, Fontisto } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Qty from "./Qty";
import axios from "axios";
import url from "../Url";
import { io } from "socket.io-client/dist/socket.io.js";
import SelectDropdown from "react-native-select-dropdown";

//Colors
const {
  light_brand,
  neon_light_brand,
  primary,
  brand,
  BR_blur,
  JT_brand,
  OJT_brand,
} = Colors;
//Colors
const Total = ({ navigation, route }) => {
  const [count, setCount] = useState(0);
  const [tables, setTables] = useState([]);
  const [drinkSelect, setDrinkSelect] = useState([]);
  const idDrinks = route.params.idDrinks;
  const [idTable, setIdTable] = useState();
  const [arrIdDrinkOder, setArrIdDrinkOder] = useState([]);
  const [data, setData] = useState([]);
  const [drinksOder, setDrinksOder] = useState([]);
  //const [type, setType] = useState();
  //const [price, setPrice] = useState([]);

  const socket = io("http://192.168.1.144:3000", {
    jsonp: false,
  });

  useEffect(() => {
    getDrinkBySelect();
  }, [count]);

  useEffect(() => {
    getAllTable();
  }, []);

  const getAllTable = async () => {
    await fetch(url + "table/list")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        var data = res.data;
        setTables(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const createTwoButtonAlert = () =>
    Alert.alert("Thông báo", "Thêm Order thành công!", [
      { text: "OK", onPress: () => navigation.navigate("Notification") },
    ]);

  const handleChangeCount = (count) => {
    //console.log("count: ", count);
    setCount(count);
  };
  const handleSubmit = async () => {
    await addDrinkOder();
    //console.log(drinksOder);
    // await addOder();
    // Alert.alert("add order success");
    // navigation.navigate("Notification");
    createTwoButtonAlert();
  };
  const addOder = async (drink) => {
    drink.map((item, index) => {
      arrIdDrinkOder.push(item._id);
    });
    //console.log(arrIdDrinkOder);
    const data = {
      table: idTable,
      drinks: arrIdDrinkOder,
    };
    await fetch(url + "order/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);

        //setCheck(!check);
      })
      .catch((err) => console.log("ERR", err));
  };
  const addDrinkOder = async () => {
    await idDrinks.map((item, index) => {
      data.push({ drink: item, qty: count, table: idTable });
    });

    //console.log(data);
    console.log("so luong: " + data.length);
    await fetch(url + "drinkorder/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.data);
        setDrinksOder(() => {
          const drinkOs = res.data;
          addOder(drinkOs);

          return drinkOs;
        });

        //setCheck(!check);
      })
      .catch((err) => console.log("ERR", err));
  };
  //console.log(drinksOder);

  const getDrinkBySelect = async () => {
    //console.log(arrId);

    await fetch(url + "drink/show/all", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: idDrinks }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        // console.log("success");

        setDrinkSelect(data.data);
        // setData([]);
      })
      .catch((err) => console.log("ERR", err));
  };

  const kiemTraGia = () => {
    idDrinks.map((item, index) => {
      if (index == drinksBySelect.findIndex(index)) {
        console.log("ddusng rooif");
      }
    });
  };

  const DrorpDownInput = ({ label, icon, ...props }) => {
    return (
      <View>
        <SelectDropdown
          buttonStyle={styles.dropDown}
          buttonTextStyle={{ color: brand, marginLeft: -5 }}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          dropdownIconPosition={"right"}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={brand}
                size={18}
              />
            );
          }}
          data={listTable}
          onSelect={(item, index) => {
            // setCategoryId(item.key);
            setIdTable(item.key);
            console.log("key: " + item.key);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
    );
  };

  const listTable = tables.map((item) => {
    return <Text key={item._id}>{item.name}</Text>;
  });

  const drinksBySelect = drinkSelect.map((item, index) => {
    // setPrice(item.price * count);
    return (
      <StyledFormHome key={index} style={styles.twocl}>
        <JustWhiteTheme style={styles.TouchableImage}>
          <StyledDrinkTouchableImage
            resizeMode="cover"
            source={{ uri: `${item.image}` }}
          />
          <StyledDrinkTouchableText> {item.name}</StyledDrinkTouchableText>
          {/* <StyledDrinkTouchablePrice>
            {item.price * count}$
          </StyledDrinkTouchablePrice> */}
          <Qty style={styles.IDZone} handleChangeCount={handleChangeCount} />
          <SDTDeleteB onPress={() => Alert.alert("Deleted")}>
            <Ionicons style={styles.drop_icons} name="trash-bin" />
          </SDTDeleteB>
        </JustWhiteTheme>
      </StyledFormHome>
    );
  });
  return (
    <View style={styles.container}>
      <PageTitle style={{ color: brand, marginTop: "10%" }}>Totail</PageTitle>
      <DrorpDownInput label="Category"></DrorpDownInput>
      <ScrollView style={{ flex: 0.6, marginTop: "15%" } }
    showsVerticalScrollIndicator={false}
        >
        {drinksBySelect}
      </ScrollView>
      <View style={{ flex: 0.3125, marginTop: "15%" }}>
        <Line />
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "5%",
            justifyContent: "space-between",
            marginBottom: "5%",
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Total:
          </Text>
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {" "}
            50$
          </Text>
        </View>
        <Button
          title="Submit"
          onPress={() => handleSubmit()}
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: "column",
  },
  twocl: {
    flex: 0.8,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  TouchableImage: {
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 3,
    },
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
    position: "absolute",
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
    marginTop: "40%",
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
});

export default Total;
