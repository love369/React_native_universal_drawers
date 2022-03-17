/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { useEffect, useReducer } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { LoginStackNavigator } from './navigation/StackNavigator';
const App = () => {

  const initialState = {
    authToken: null,
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {initialState.authToken === null ? <LoginStackNavigator /> : <DrawerNavigator />}
    </NavigationContainer>
  );
};

export default App;
