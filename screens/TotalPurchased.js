import React from "react";
import {
    StyledContainer,
    InnerContainer,
    OLPic,
    PageTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    Colors,
    UULabel,
    UUInput,
    FormUpdate,
    LDInput,
    FormAdd,
} from "../components/styles"
import { Formik } from "formik";
import { StyleSheet, View, Text, Alert,Image } from "react-native";
//Colors 
const { brand, blur, primary, secondary, black, darkLight } = Colors;
const TotalPurchased = ({ navigation }) => {
    return (
        <StyledContainer >
            <InnerContainer>
                <OLPic resizeMode="cover" source={require('../assets/image/br4.png')} ></OLPic>
                <FormAdd style={styles.TouchableImage} >
                    <PageTitle style={{ marginBottom:"7%" }}>Total Purchased</PageTitle>
                    <Formik
                        initialValues={{ totalpurchased :''}}
                        onSubmit={(values) => { console.log(values); }} >
                        {({ handleChange, handleBlur, HandleSubmit, values }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    autofocus
                                    label="Total Purchased"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('totalpurchased ')}
                                    onBlur={handleBlur('totalpurchased ')}
                                    value={values.totalpurchased } >
                                </MyTextInput>
                                <Line />
                                <StyledButton
                                    onPress={() => {
                                        drink(values);
                                            HandleSubmit
                                    }} >
                                    <ButtonText>
                                        Submit
                                    </ButtonText>
                                </StyledButton>
                            </StyledFormArea>
                        )}
                    </Formik>
                </FormAdd>
            </InnerContainer>
        </StyledContainer>
    );
}
const MyTextInput = ({ label, icon, ...props }) => {
    return (
        <View >
            <UULabel>
                {label}
            </UULabel>
            <LDInput {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    TouchableImage: {
        padding: 20,
        shadowColor: "#1F2937",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },
})

export default TotalPurchased;