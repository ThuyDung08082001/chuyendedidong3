import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import { Colors } from '../components/styles';
import Home from '../screens/Home';
import Done from './Done';
import DrinkChoosing from './DrinkChoosing';
import OnWorking from './OnWorking';
import Test from './Test';


const Tab = createMaterialTopTabNavigator();
const { brand, darkLight,black ,primary, secondary} = Colors;
const TestTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Critic'}
      tabBarOptions={{
        activeTintColor: brand,
        tabStyle: {
          height:50,  
        },
        inactiveTintColor: black,
        indicatorStyle :{
          height:2.1,
          borderRadius:10,
          width:"10%",
          backgroundColor:brand,
          marginHorizontal:'12%',
          // marginBottom:-1.2,
        },
        labelStyle: {
          fontSize: 14,
          marginTop: 15,
          fontWeight: 'bold',
          marginBottom:-0.125,
        },
        
      }} >
      <Tab.Screen name="Đã Làm" component={Done} />
      <Tab.Screen name="Đang Làm" component={OnWorking} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  contanner: {
    backgroundColor: primary,
    flex: 1
  }
})

export default TestTab;