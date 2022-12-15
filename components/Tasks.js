import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import App from "../App";

const Task =(props)=>{
    return (
        <View style={style.item}>
            <View style={style.itemLeft}>
                <TouchableOpacity style={style.square}></TouchableOpacity>
                <Text style={style.itemText}>{props.text}</Text>
            </View>
            <View style={style.cirular} />
        </View>
        
    )
}
const style = StyleSheet.create({
item:{
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginBottom: 10,
},
itemLeft:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap',
    },
square:{
    width:25,
    height: 24,
    backgroundColor:'#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
},
itemText:{
    maxWidth: '80%',
},
cirular:{
    width:12,
    height:12,
    backgroundColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
},

});
export default Task;
