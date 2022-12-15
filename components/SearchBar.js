// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Colors } from '../components/styles';


//Colors 
const { light_brand, primary, secondary, tertiary, blue, darkLight, brand, green, red, black, blur } = Colors;
const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
    return (
      <View style={styles.container}>
        <View
          style={
            clicked
              ? styles.searchBar__clicked
              : styles.searchBar__unclicked
          }
        >
          {/* search Icon */}
          <Feather
            name="search"
            size={25}
            style={{color:brand }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
              setClicked(true);
            }}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {clicked && (
            <Entypo name="cross"style={styles.logo} onPress={() => {
                setSearchPhrase("")
                Keyboard.dismiss();
                setClicked(false);
            }}/>
          )}
        </View>
      </View>
    );
  };
  export default SearchBar;
// styles
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: "1%",
    margin: 15,
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "50%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "150%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  logo: {
    fontSize: 25,
    color: brand,
    marginLeft: -35,
},
});