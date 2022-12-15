import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home'
import Login from './screens/Login'
import AddDrink from './screens/AddDrink'
import EditDrink from './screens/EditDrink'
import SearchBar from './components/SearchBar'
import DateRegist from './screens/DateRegist' 
import DrinkChoosing from './screens/DrinkChoosing'
import TableChoosing from './screens/TableChoosing'
import Total from './screens/Total'
import Test from './screens/Test'
import TestTab from './screens/TestTab';
import Notification from './screens/Notification';
import Done from './screens/Done';
import OnWorking from './screens/OnWorking';
import TestIDBtn from './screens/TestIDBtn';
import Salary from './screens/Salary';
import WorkingkDate from './screens/WorkingDate';
import DayRevenue from './screens/DayRevenue';
import TotalPurchased from './screens/TotalPurchased';
// import TestNav from './screens/TestNav'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
        headerShown: false,
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditDrink" component={EditDrink} />
        <Stack.Screen name="AddDrink" component={AddDrink} />
        <Stack.Screen name="DateRegist" component={DateRegist} />
        <Stack.Screen name="DrinkChoosing" component={DrinkChoosing} />
        <Stack.Screen name="TableChoosing" component={TableChoosing} />
        <Stack.Screen name="Total" component={Total} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="TestTab" component={TestTab} />
        <Stack.Screen name="SearchBar" component={SearchBar} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Done" component={Done} />
        <Stack.Screen name="TestIDBtn" component={TestIDBtn} />
        <Stack.Screen name="OnWorking" component={OnWorking} />
        <Stack.Screen name="Salary" component={Salary} />
        <Stack.Screen name="TotalPurchased" component={TotalPurchased} />
        <Stack.Screen name="DayRevenue" component={DayRevenue} />
        <Stack.Screen name="WorkingkDate" component={WorkingkDate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack 