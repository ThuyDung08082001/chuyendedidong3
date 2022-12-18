import styled from "styled-components";
import { Constants } from "expo-constants";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Icon,
} from "react-native";

//color
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#1F2937",
  // brand: "#a85b3c",
  // brand: "#395d6f",
  // brand: "#a76f50",
  brand: "#b97e5a",
  light_brand: "#ce6b43",
  neon_light_brand: "#f6bda5",
  //green: "#10B981",
  green: "#6bad3a",
  deep_green: "#426a24",
  //red: "#EF4444",
  red: "#ad3a3a",
  // blue:"#0db1f0",
  blue: "#3a78ad",
  black: "#1d3240",
  blur: "#adafb2",
  neon_blur: "#f0eeee",
  BR_blur: "#d9dbda",
  // JT_brand: "#284254",
  JT_brand: "#386379",
  // OJT_brand: "#D7BDAB",
  OJT_brand: "#c79c86",
  // JT_brand: "#714334",
  // OJT_brand: "#77acb3",
};

const {
  light_brand,
  primary,
  secondary,
  tertiary,
  blue,
  darkLight,
  brand,
  green,
  red,
  black,
  blur,
} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  /* background-color: ${primary}; */
`;
export const StyledHomeContainer = styled.View`
  flex: 1;
  padding-vertical: 8%;
  /* background-color: ${primary}; */
`;
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 150%;
  height: 50%;
  margin-top: -10%;
  margin-bottom: 10px;
`;

export const HomePageLogo = styled.Image`
  width: 450px;
  height: 200px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: -20px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
`;
export const FormLog = styled.View`
  position: absolute;
  width: 105%;
  height: 53%;
  background-color: ${primary};
  top: 35%;
  padding: 30px;
  border-radius: 12px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
  margin-bottom: 5px;
`;

export const SubTittle = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${tertiary};
  letter-spacing: 1px;
`;
export const StyledFormArea = styled.View`
  width: 100%;
`;

export const StyledFormHome = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
`;
export const StyledTextInput = styled.TextInput`
  background: ${secondary};
  padding: 10px;
  padding-left: 65px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  color: ${tertiary};
  margin-vertical: 8px;
`;
export const StyledTextInputs = styled.TextInput`
  background: ${secondary};
  padding: 10px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  color: ${tertiary};
  margin-vertical: 8px;
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  padding-left: 5px;
`;
export const LeftIcon = styled.View`
  left: 20px;
  top: 42px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;
export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 60px;
  margin-vertical: 5px;
  margin-horizontal: 20px;
`;
export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 20px;
  font-weight: bold;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 15px;
`;
export const StyledTouchable = styled.TouchableOpacity`
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 180px;
  width: 150px;
  margin-vertical: 10px;
  margin-horizontal: 18px;
`;
export const StyledTouchableImage = styled.Image`
  position: absolute;
  height: 120px;
  width: 150px;
  z-index: 1;
  top: 0;
  border-radius: 8px;
  background-color: ${primary};
`;
export const StyledTouchableText = styled.Text`
  position: absolute;
  bottom: 0;
  color: ${primary};
  font-size: 16px;
  height: 60px;
  width: 150px;
  padding-vertical: 20px;
  font-weight: bold;
  text-align: center;
`;
export const WhiteZone = styled.View`
  background-color: ${primary};
  border-radius: 10px;
  width: 90%;
  height: 50px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const WZText = styled.Text`
  padding-vertical: 15px;
  padding-horizontal: 10px;
  font-size: 18px;
  color: ${brand};
  font-weight: bold;
`;

// css DC styles

export const StyledDrinkTouchable = styled.TouchableOpacity`
  background-color: ${primary};
  border-radius: 25px;
  width: 350px;
  height: 100px;
  margin-top: 5px;
  margin-vertical: 20px;
  margin-horizontal: 15px;
`;
export const JustWhiteTheme = styled.View`
  background-color: ${primary};
  border-radius: 25px;
  width: 350px;
  height: 100px;
  margin-top: 5px;
  margin-vertical: 20px;
  margin-horizontal: 15px;
`;

export const StyledDrinkTouchableImage = styled.Image`
  position: absolute;
  height:90px;
  width:90px;
  z-index: 1;
  left: -15;
  margin-vertical:1%;
  border-radius: 35px;
  /* background-color: ${brand}; */
`;
export const StyledDrinkTouchableText = styled.Text`
  position: absolute;
  left: 80px;
  color: ${brand};
  font-size: 22px;
  height: 400px;
  width: 180px;
  padding-vertical: 15px;
  margin-horizontal: 5px;
  font-weight: 500;
  text-align: left;
  text-transform: capitalize;
`;
export const StyledDrinkTouchableSmallText = styled.Text`
  position: absolute;
  top: 35px;
  left: 80px;
  color: #000000;
  font-size: 11px;
  height: 80px;
  width: 150px;
  text-align: left;
  padding-vertical: 10px;
  font-weight: bold;
  text-align: left;
`;
export const StyledDrinkTouchablePrice = styled.Text`
  position: absolute;
  top: 20px;
  left: 185px;
  color: #000000;
  font-size: 22px;
  height: 400px;
  width: 150px;
  padding-vertical: 15px;
  font-weight: bold;
  text-align: center;
`;
export const SDTPrice1 = styled.Text`
  position: absolute;
  top: 40px;
  left: 60px;
  color: #000000;
  font-size: 20px;
  height: 400px;
  width: 150px;
  padding-vertical: 15px;
  text-align: center;
`;

export const StyledDrinkTouchableBtn = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 290px;
  height: 50px;
  width: 50px;
  padding-vertical: 15px;
  font-weight: bold;
  text-align: center;
  background-color: ${brand};
  border-radius: 15px;
`;
export const SDTBtn = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 250px;
  height: 50px;
  width: 50px;
  padding-vertical: 15px;
  font-weight: bold;
  text-align: center;
  background-color: ${green};
  border-radius: 5;
`;
export const SDTDeleteB = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 290px;
  height: 50px;
  width: 50px;
  padding-vertical: 15px;
  font-weight: bold;
  text-align: center;
  background-color: ${red};
  border-radius: 5;
`;
export const SDTTableBtn = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 230px;
  height: 50px;
  width: 50px;
  padding-vertical: 15px;
  font-weight: bold;
  text-align: center;
  background-color: ${green};
  border-radius: 5;
`;
export const SDTDeleteTableB = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 290px;
  height: 50px;
  width: 50px;
  padding-vertical: 15px;
  font-weight: bold;
  text-align: center;
  background-color: ${red};
  border-radius: 5;
`;

// Home Admin Style
export const StyledHomeBrownZone = styled.View`
  background-color: ${brand};
  width: 100%;
  height: 170px;
  border-bottom-left-radius: 50px;
  overflow: hidden;
`;
export const StyledHomeBrownText = styled.Text`
  padding-vertical: 30px;
  color: ${primary};
  padding-left: 20px;
  font-size: 40px;
  position: absolute;
  bottom: 0;
  font-family: "AlexBrushRegular";
`;
export const StyledHomeTab = styled.TouchableOpacity`
  background-color: ${primary};
  border-radius: 10px;
  width: 300px;
  height: 80px;
  margin-top: 5px;
  margin-vertical: 20px;
`;

export const StyledHomeTabImage = styled.Image`
  position: absolute;
  height: 80px;
  width: 80px;
  border-radius: 35px;
  margin-horizontal: 15px;
`;
export const StyledHomeTabText = styled.Text`
  position: absolute;
  color: ${brand};
  font-size: 27px;
  font-weight: 500;
  top: 25;
  left: 120;
`;
export const StyledHomeBrownImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  position: absolute;
  right: 0;
  margin-right: 10px;
  top: 23px;
`;

//  css price and name in drink scr
export const SDTText = styled.Text`
  position: absolute;
  color: ${brand};
  font-size: 16px;
  height: 50px;
  width: 130px;
  font-weight: bold;
  text-align: left;
  left: 50px;
`;

export const SDTPrice = styled.Text`
  position: absolute;
  top: 50px;
  left: 40px;
  color: ${tertiary};
  font-size: 16px;
  height: 40px;
  width: 100px;
  font-weight: bold;
  text-align: center;
`;

// css 3 btn
export const StyledDrinkTouchableAdd = styled.TouchableOpacity`
  position: absolute;
  left: 140px;
  margin-vertical: 25px;
  width: 55px;
  height: 50px;
  font-weight: bold;
  text-align: center;
  background-color: ${blue};
  border-radius: 5px;
`;
export const StyledDrinkTouchableDelete = styled.TouchableOpacity`
  position: absolute;
  left: 200px;
  width: 55px;
  height: 50px;
  font-weight: bold;
  text-align: center;
  background-color: ${red};
  border-radius: 5px;
  margin-vertical: 25px;
`;
export const StyledDrinkTouchableEdit = styled.TouchableOpacity`
  position: absolute;
  left: 260px;
  width: 55px;
  height: 50px;
  font-weight: bold;
  text-align: center;
  background-color: ${green};
  border-radius: 5px;
  margin-vertical: 25px;
`;
export const SDTBtnText = styled.Text`
  color: ${primary};
  font-size: 15;
  text-align: center;
  padding-vertical: 15px;
  font-weight: bold;
`;

// CRUB css
export const OLPic = styled.Image`
  width: 120%;
  height: 110%;
  margin-top: -10%;
  z-index: -1;
`;

export const FormUpdate = styled.View`
  position: absolute;
  width: 105%;
  height: 65%;
  background-color: ${primary};
  top: 20%;
  padding: 30px;
  border-radius: 12px;
`;

export const FormAdd = styled.View`
  position: absolute;
  width: 105%;
  height: 88%;
  background-color: ${primary};
  top: 5%;
  padding: 20px;
  border-radius: 12px;
`;
export const UULabel = styled.Text`
  color: ${tertiary};
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  margin-left: 2%;
`;
export const UUInput = styled.TextInput`
  background: ${secondary};
  padding: 20px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  color: ${black};
  margin-vertical: 10px;
`;

//Test
export const TableStyled = styled.View`
  position: absolute;
  width: 107%;
  height: 70%;
  background-color: ${primary};
  top: 15%;
  border-radius: 12px;
`;

//NewHome
export const FormHome = styled.View`
  /* position: absolute;
  width: 120%;
  height: 53%;
  background-color: ${primary};
  top:15%;
  padding:30px;
  border-radius: 150% */
`;

export const HomePageImage = styled.Image`
  width: 150%;
  height: 50%;
  margin-top: -10%;
  margin-bottom: 10px;
  border-bottom-left-radius: 240px;
  border-bottom-right-radius: 240px;
`;
/* export const HomePageImage = styled.Image`
  width: 400px;
  height: 400px;
  margin-top: -100px;
  margin-bottom: 10px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`; */

export const TouchableHomeImage = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  position: absolute;
  right: 0;
  margin-right: 10px;
`;
export const THButton = styled.TouchableOpacity`
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 115px;
  width: 170px;
  margin-vertical: 10px;
  margin-horizontal: 18px;
`;
export const THtext = styled.Text`
  position: absolute;
  color: ${primary};
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  bottom: 10%;
  left: 6%;
  padding-bottom: 2%;
`;
export const HelloText = styled.Text`
  position: absolute;
  color: ${primary};
  font-size: 25px;
  text-align: left;
  font-weight: bold;
  top: 15%;
  left: 5%;
`;
export const BLtext = styled.Text`
  color: ${darkLight};
  font-size: 15px;
  text-align: center;
`;

//IconComponent
export const LayoutTable = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border: 2px solid ${primary};
  background-color: ${primary};
  border-radius: 10%;
  padding-bottom: 5%;
`;

export const TableName = styled.Text`
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${brand};
  font-size: 18%;
`;

export const TableArea = styled.Text`
  text-align: center;
  color: ${brand};
  font-size: 22%;
  font-weight: bold;
`;

export const StyledHomeBrownLogo = styled.Image`
  color: ${primary};
  height: 60px;
  width: 250px;
  position: absolute;
  bottom: 15%;
  left: 5%;
`;

export const SHBZ = styled.View`
  background-color: ${brand};
  width: 100%;
  height: 170px;
  border-bottom-left-radius: 50px;
  overflow: hidden;
  margin-top: -15%;
`;
export const TouchableHomeLogo = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  margin-horizontal: 45%;
  margin-vertical: 2%;
`;

// Late Date Input

export const LDInput = styled.TextInput`
  background: ${secondary};
  padding: 20px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 450px;
  margin-bottom: 10px;
  color: ${black};
  margin-vertical: 10px;
  align-items: flex-start;
`;

// Late Date Input

// export const LDInput = styled.TextInput`
//   background: ${secondary};
//   padding: 20px;
//   padding-right: 55px;
//   border-radius: 5px;
//   font-size: 16px;
//   height: 450px;
//   margin-bottom: 10px;
//   color: ${black};
//   margin-vertical: 10px;
// `
