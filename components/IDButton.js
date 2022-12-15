import { Button, StyleSheet, Text, View } from "react-native";
import React from 'react'
import { useState } from "react";


export default function IDButton() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment(props) {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <View className="App">
      <Text>{count}</Text>
      <Button onClick={decrement} title="add" />
      <Button onClick={increment} title="minute"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop:200
  },
})