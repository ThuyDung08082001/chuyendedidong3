import { StyleSheet, Text, View } from 'react-native'
import IDButton from "../components/IDButton";
import React from 'react'

const TestIDBtn = (navigation) => {
  return (
    <View style={styles.container}>
      <IDButton/>
    </View>
  )
}

export default TestIDBtn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:200
    },
})