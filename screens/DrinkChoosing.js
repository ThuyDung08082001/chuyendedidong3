import React, { useState, useEffect } from "react";
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
  SDTPrice1,
  SDTBtn,
} from "../components/styles";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import url from "../Url";
// import Checkbox from "expo-checkbox";
import { CheckBox } from "react-native-elements";
import Color from "color";

//Colors
const {
  light_brand,
  neon_light_brand,
  primary,
  brand,
  BR_blur,
  JT_brand,
  OJT_brand,
  darkLight,
} = Colors;
//Colors
const DrinkChoosing = ({ navigation, clicked, setClicked }) => {
  // id ban
  //const idTable = route.params.id;

  const [check, setCheck] = useState(false);

  const [listDrink, setListDrink] = useState([]);

  //load dữ liệu tất cả category
  const [listCategory, setListCategory] = useState([]);

  // check load category
  const [type, setType] = useState("");

  // check load sort On Price
  const [typeSort, setTypeSort] = useState("");

  // lưu mảng id để tạo drink oder
  const [arrId, setArrId] = useState([]);
  //const [data, setData] = useState([]);

  // đồ uống theo danh mục
  const [listDrinkByCategory, setListDrinkByCategory] = useState([]);
  const [listSortDrinkOnPrice, setListSortDrinkOnPrice] = useState([]);

  // drink đã dc chọn
  //const [drinkSelect, setDrinkSelect] = useState([]);

  useEffect(() => {
    getListCategory();
    getListDrink();
  }, []);

  // chạy dữ liệu khi có sự thay đổi
  // useEffect(() => {
  //   getListDrink();
  // }, [check]);

  useEffect(() => {
    if (type) {
      getListDrinkByCategory();
    } else {
      getListDrink();
    }
  }, [type, check]);

  useEffect(() => {
    if (typeSort) {
      getListDrinkOnPrice();
    }
  }, [typeSort]);

  // lấy các danh mục ra
  const getListCategory = async () => {
    await fetch(url + "category/list")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        var data = res.data;
        setListCategory(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  // lấy các đồ uống thuộc 1 danh mục
  const getListDrinkByCategory = async () => {
    await fetch(url + "drink/category/" + type)
      .then((res) => res.json())
      .then((res) => {
        // console.log("drink by category: ");
        // console.log(res.data);
        var data = res.data;
        setListDrinkByCategory(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  // lấy tất cả đồ uống
  const getListDrink = async () => {
    await fetch(url + "drink/list")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        var data = res.data;
        //setCheck(check + 1);
        setListDrink(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const getListDrinkOnPrice = async () => {
    await fetch(url + "drink/" + typeSort)
      .then((res) => res.json())
      .then((res) => {
        var data = res.data;

        setListSortDrinkOnPrice(data);
      })
      .catch((err) => console.log("ERR", err));
  };
  console.log(arrId);

  const handleCheck = (id) => {
    setArrId((prev) => {
      const isChecked = arrId.includes(id);
      if (isChecked) {
        return arrId.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const submitNavigation = async () => {
    console.log(arrId);
    if (arrId.length != 0) {
      setArrId([]);
      //await addDrinkOder();

      navigation.navigate("Total", {
        idDrinks: arrId,
        //idTable: idTable,
      });
    } else {
      Alert.alert("Please choose a drink");
    }
  };

  // xuất danh mục xuống dropdown
  const dataCategory = listCategory.map((item) => {
    return <Text key={item._id}>{item.name}</Text>;
  });

  const listDrinkCategory = listDrinkByCategory.map((item) => {
    return (
      <StyledFormHome style={styles.twocl}>
        <StyledDrinkTouchable style={styles.TouchableImage}>
          <StyledDrinkTouchableImage
            resizeMode="cover"
            source={{ uri: `${item.image}` }}
          />
          <StyledDrinkTouchableText numberOfLines={1}>
            {" "}
            {item.name}
          </StyledDrinkTouchableText>
          <SDTPrice1>{item.price}$</SDTPrice1>
          <SDTBtn onPress={() => Alert.alert("Note")}>
            <Ionicons style={styles.drop_icons} name="md-bookmark" />
          </SDTBtn>
          <TouchableOpacity style={styles.checkbox}>
            <CheckBox
              checked={arrId.includes(item._id)}
              onPress={() => handleCheck(item._id)}
              color={check ? brand : undefined}
            />
          </TouchableOpacity>
        </StyledDrinkTouchable>
      </StyledFormHome>
    );
  });
  const drinkOnPrice = listSortDrinkOnPrice.map((item) => {
    return (
      <StyledFormHome style={styles.twocl}>
        <StyledDrinkTouchable style={styles.TouchableImage}>
          <StyledDrinkTouchableImage
            resizeMode="cover"
            source={{ uri: `${item.image}` }}
          />
          <StyledDrinkTouchableText numberOfLines={1}>
            {" "}
            {item.name}
          </StyledDrinkTouchableText>
          <SDTPrice1>{item.price}$</SDTPrice1>
          <SDTBtn onPress={() => Alert.alert("Note")}>
            <Ionicons style={styles.drop_icons} name="md-bookmark" />
          </SDTBtn>
          <TouchableOpacity style={styles.checkbox}>
            <CheckBox
              checked={arrId.includes(item._id)}
              onPress={() => handleCheck(item._id)}
              color={check ? brand : undefined}
            />
          </TouchableOpacity>
        </StyledDrinkTouchable>
      </StyledFormHome>
    );
  });
  const drinks = listDrink.map((item) => {
    return (
      <StyledFormHome style={styles.twocl}>
        <StyledDrinkTouchable style={styles.TouchableImage}>
          <StyledDrinkTouchableImage
            resizeMode="cover"
            source={{ uri: `${item.image}` }}
          />
          <StyledDrinkTouchableText numberOfLines={1}>
            {" "}
            {item.name}
          </StyledDrinkTouchableText>
          <SDTPrice1>{item.price}$</SDTPrice1>
          <SDTBtn onPress={() => Alert.alert("Note")}>
            <Ionicons style={styles.drop_icons} name="md-bookmark" />
          </SDTBtn>
          <TouchableOpacity style={styles.checkbox}>
            <CheckBox
              checked={arrId.includes(item._id)}
              onPress={() => handleCheck(item._id)}
              color={check ? brand : undefined}
            />
          </TouchableOpacity>
        </StyledDrinkTouchable>
      </StyledFormHome>
    );
  });

  const checkType = () => {
    //console.log(typeSort);
    if (type) {
      return listDrinkCategory;
    } else if (typeSort) {
      return drinkOnPrice;
    } else {
      return drinks;
    }
  };

  const checkKey = () => {
    setType(null), setCheck(!check), setTypeSort(null);
  };

  const DrorpDownInput = ({ label, icon, ...props }) => {
    return (
      <View>
        <SelectDropdown
          buttonStyle={styles.dropDown}
          buttonTextStyle={{ color: brand, marginLeft: -5 }}
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
          data={dataCategory}
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
    <View style={styles.container}>
      <PageTitle style={{ color: brand, marginTop: "10%" }}>
        DrinkChoosing
      </PageTitle>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.leftBtn}
          onPress={() => {
            checkKey();
          }}
        >
          <MaterialCommunityIcons
            name="bookmark-multiple"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.leftBtn}
          onPress={() => {
            setType(null), setTypeSort("sortIncrease");
          }}
        >
          <MaterialCommunityIcons
            name="arrow-up-bold-circle"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.leftBtn}
          onPress={() => {
            setType(null), setTypeSort("sortDecrease");
          }}
        >
          <MaterialCommunityIcons
            name="arrow-down-bold-circle"
            style={styles.icon}
          />
        </TouchableOpacity>
        <DrorpDownInput />
      </View>
      <ScrollView style={{ flex: 0.6, marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        >
        {checkType()}
      </ScrollView>
      <View style={{ flex: 0.125 }}>
        <Button title="Submit" onPress={() => submitNavigation()} />
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
    alignItems: "center",
  },
  drop_icons: {
    position: "absolute",
    top: "50%",
    left: "20%",
    fontSize: 30,
    color: primary,
  },
  checkbox: {
    height: 70,
    width: 50,
    borderRadius: 15,
    position: "absolute",
    left: 300,
    top: 25,
    // borderColor: brand,
    // borderWidth: 1.5,
    // backgroundColor: brand,
  },
  logo: {
    paddingTop: "25%",
    fontSize: 25,
    textAlign: "center",
    color: primary,
  },
  leftBtn: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: brand,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "1%",
  },
  dropDown: {
    height: 40,
    width: 200,
    borderWidth: 1.5,
    borderColor: brand,
    position: "absolute",
    left: 30,
    borderRadius: 5,
    backgroundColor: primary,
  },
  icon: {
    fontSize: 30,
    color: primary,
  },
});

export default DrinkChoosing;
