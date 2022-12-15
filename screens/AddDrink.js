
import React from "react";
import { StatusBar } from 'expo-status-bar';

import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    StyledFormArea,
    StyledTextInputDrink,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    Line,
    Colors,
} from "../components/styles"
import { Formik } from "formik";
import { View } from "react-native";

//Colors 
const {  darkLight } = Colors;

const AddDrink = ({ navigation }) => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Add Drink</PageTitle>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={(values) => { console.log(values); }} >
                    {({ handleChange, handleBlur, HandleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput
                                autofocus
                                label="NameDrink"
                                placeholder="inputName"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('NameDrink')}
                                onBlur={handleBlur('NameDrink')}
                                value={values.username}>
                            </MyTextInput>
                            <MyTextInput
                                autofocus
                                label="Price"
                                placeholder="inputPrice"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('Price')}
                                onBlur={handleBlur('Price')}
                                value={values.username}>
                            </MyTextInput>
                            <MyTextInput
                                autofocus
                                label="Category"
                                placeholder="inputCategory"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('Category')}
                                onBlur={handleBlur('Category')}
                                value={values.username}>
                            </MyTextInput>
                          
                            <Line />
                            <StyledButton onPress={() => { navigation.navigate('Home'), HandleSubmit }} >
                                <ButtonText>
                                    Submit
                                </ButtonText>
                            </StyledButton>
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <StyledTextInputDrink {...props} />
        </View>
    )
}

export default AddDrink;




