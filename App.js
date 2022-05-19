import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import LoginScreen from "./app/screens/LoginScreen";
import SecondScreen from "./app/screens/SecondScreen";


const Stack = createNativeStackNavigator();

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


const MyStack = () => {

  let [fontsLoaded] = useFonts({
    "poppins": require("./app/assets/fonts/Poppins-Regular.ttf"),
    "poppins-med": require("./app/assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("./app/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={LoginScreen}
        />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;