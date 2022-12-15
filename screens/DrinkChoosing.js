import React, { useState } from "react";
import Button from '../components/Button';
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
} from "../components/styles"
import { Alert, ScrollView, StyleSheet, Text, View , } from "react-native";
import { MaterialCommunityIcons, Ionicons, Fontisto } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";


//Colors 
const { light_brand, neon_light_brand, primary, brand, BR_blur, JT_brand, OJT_brand } = Colors;
//Colors 
const DrinkChoosing = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container} >
           <PageTitle style={{ color: brand  ,marginTop:"10%" }}>DrinkChoosing</PageTitle>
            <ScrollView style={{ flex: .6 , marginTop: 20 }} >
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? brand : undefined}
                        />
                    </StyledDrinkTouchable>
                </StyledFormHome>
            </ScrollView>
            <View style={{ flex: .125 }}>
                <Button title="Submit" onPress={() => navigation.navigate('Total')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'column',
    },
    twocl: {
        flex: .8,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    TouchableImage: {
        padding: 20,
        shadowColor: "#000000",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
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
        position: 'absolute',
        left: 320,
        top: 25,
        borderColor: brand,
        borderWidth: 1.5,
        // backgroundColor: brand,
    },
    logo: {
        paddingTop: "25%",
        fontSize: 25,
        textAlign: "center",
        color: primary,
    },
});

export default DrinkChoosing;