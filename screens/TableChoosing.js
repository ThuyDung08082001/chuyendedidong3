import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Colors,
  OLPic,
  PageTitle,
  SDTBtn,
  SDTDeleteB,
  SDTDeleteTableB,
  SDTTableBtn,
  SHBZ,
  StyledDrinkTouchableBtn,
  StyledHomeBrownLogo,
  TouchableHomeLogo,
} from "../components/styles";
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
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import url from "../Url";
import { Alert } from "react-native";

const TableChoosing = ({ navigation }) => {
  const [tables, setTables] = useState([]);
  const [areas, setAreas] = useState([]);
  const [tablesByArea, setTableByArea] = useState([]);
  const [check, setCheck] = useState(false);
  const [type, setType] = useState("");
  useEffect(() => {
    getAreas();
  }, []);

  useEffect(() => {
    if (type) {
      getTablesByArea();
    } else {
      getTables();
    }
  }, [type, check]);

  const getTablesByArea = async () => {
    await fetch(url + "table/area/" + type)
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.data);
        var data = res.data;
        setTableByArea(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const getTables = async () => {
    await fetch(url + "table/list")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.data);
        var data = res.data;
        setTables(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const getAreas = async () => {
    await fetch(url + "area/list")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.data);
        var data = res.data;
        setAreas(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const listTable = tables.map((item) => {
    return (
      <TouchableOpacity style={[styles.Touch, styles.shadow]}>
        <View style={[styles.item]}>
          <MaterialCommunityIcons style={styles.icons} name="desk" />
          <View style={styles.textArea}>
            <Text numberOfLines={1} style={styles.nametext}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={styles.nametext}>
              {item.area.name}
            </Text>
          </View>
        </View>
        <SDTTableBtn onPress={() => Alert.alert("Đã Chọn")}>
          <Ionicons style={styles.drop_icons} name="checkmark" />
        </SDTTableBtn>
        <SDTDeleteTableB onPress={() => navigation.navigate('DrinkChoosing')}>
          <Ionicons style={styles.drop_icons} name="arrow-forward" />
        </SDTDeleteTableB>
      </TouchableOpacity>
    );
  });

  const listTableByArea = tablesByArea.map((item) => {
    return (
      <TouchableOpacity style={[styles.Touch, styles.shadow]}>
        <View style={[styles.item]}>
          <MaterialCommunityIcons style={styles.icons} name="desk" />
          <View style={styles.textArea}>
            <Text numberOfLines={1} style={styles.nametext}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={styles.nametext}>
              {item.area.name}
            </Text>
          </View>
        </View>
        <StyledDrinkTouchableBtn
          onPress={() => navigation.navigate("DrinkChoosing")}
        >
          <Ionicons
            style={styles.drop_icons}
            name="ios-arrow-forward-circle-outline"
          />
        </StyledDrinkTouchableBtn>
      </TouchableOpacity>
    );
  });

  const listAreas = areas.map((item) => {
    return <Text key={item._id}>{item.name}</Text>;
  });
  const checkExport = () => {
    if (type) {
      return listTableByArea;
    } else {
      return listTable;
    }
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
          data={listAreas}
          onSelect={(item, index) => {
            // setCategoryId(item.key);
            setType(item.key);
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

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle style={{ color: brand, marginTop: "10%" }}>
        Table Choosing
      </PageTitle>
      <DrorpDownInput label="Category" />
      <ScrollView style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
      >{checkExport()}</ScrollView>
    </SafeAreaView>
  );
};

export default TableChoosing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Touch: {
    width: "90%",
    backgroundColor: primary,
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
});
