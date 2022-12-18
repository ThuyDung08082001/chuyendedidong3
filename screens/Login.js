import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

//Icon
import { Octicons, IonicIcon } from "@expo/vector-icons";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledFormArea,
  LeftIcon,
  StyledTextInput,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  Line,
  Colors,
  FormLog,
} from "../components/styles";
import { Formik } from "formik";
import { Alert, StyleSheet, View } from "react-native";
import Button from "../components/Button";

//Colors
const { brand, darkLight, primary, blur } = Colors;

function Login({ navigation }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

    function localLogin() {
        setusername("username");
        console.log('====================================');
        console.log("login");
        console.log('====================================');
    }
    useEffect(() => {
        localLogin();

    }, [username])
    return (
        <StyledContainer >
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/image/br4.png')} />
                <FormLog style={styles.TouchableImage} >
                    <PageTitle>Login</PageTitle>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        onSubmit={(values) => { console.log(values); }} >
                        {({ handleChange, handleBlur, HandleSubmit, values, hidePassword, setHidePassword }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    autofocus
                                    label="User name"
                                    icon="person"
                                    placeholder="NameAbc"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    // value={values.username}
                                    value={username}
                                >
                                </MyTextInput>
                                <MyTextInput
                                    label="Password"
                                    icon="lock"
                                    placeholder="* * * * * *"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={true}
                                >
                                </MyTextInput>
                                <Line />
                                <StyledButton onPress={() => {
                                    navigation.navigate('Home'),
                                    HandleSubmit,
                                    console.log(values.username),
                                    console.log(values.password)
                                }} >
                                    <ButtonText>
                                        Login
                                    </ButtonText>
                                </StyledButton>
                            </StyledFormArea>
                        )}
                    </Formik>
                </FormLog>
            </InnerContainer>
        </StyledContainer>
    );
}
const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    paddingTop: 20,
    fontSize: 30,
    textAlign: "center",
    justifyContent: "center",
    color: primary,
  },
  container: {
    flex: 1,
    backgroundColor: brand,
  },
  TouchableImage: {
    elevation: 10,
    padding: 20,
    shadowColor: "#1F2937",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 3,
    },
  },
});

export default Login;
