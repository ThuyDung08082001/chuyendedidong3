import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import { Fontisto, Octicons } from "@expo/vector-icons";
import TestTab from './TestTab';
import { Colors, SHBZ, StyledHomeBrownImage, StyledHomeBrownLogo, StyledHomeBrownZone, TouchableHomeLogo } from '../components/styles';
import Button from '../components/Button';

const { brand, darkLight, black, primary, secondary } = Colors;

const Notification = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SHBZ style={{  }} >
                <TouchableHomeLogo onPress={() => { navigation.navigate('Home') }}>
                    {/* <Fontisto style={styles.logo} name="coffeescript" /> */}
                </TouchableHomeLogo>
                <StyledHomeBrownLogo resizeMode="cover" source={require('../assets/image/Untitled.png')} />
            </SHBZ>
            <TestTab style={styles.tab} ></TestTab>
            <View style={{ flex: .1 }}>
                <Button title="Submit" onPress={() => navigation.navigate('Home')} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        paddingTop: "5%",
        fontSize: 25,
        textAlign: "center",
        color: primary,
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: primary,
    },
    tab: {
        flex: .7,
        width: '100%',
    },

})
export default Notification