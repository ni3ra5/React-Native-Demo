import React from "react";
import LoginScreen from "./app/screens/LoginScreen";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() { 
  
  let [fontsLoaded] = useFonts({
    "poppins": require("./app/assets/fonts/Poppins-Regular.ttf"),
    "poppins-med": require("./app/assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("./app/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <LoginScreen />;

}
