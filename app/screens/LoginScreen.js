import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image} from "react-native";

import GlobalStyle from "../config/GlobalStyle";
import Colors from "../config/Colors";

function LoginScreen(props) {
  return (
    <SafeAreaView style={[styles.container, styles.landing]}>

      <Image 
        style={styles.logo}
        source={require('../assets/logo.png')} 
      />
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  landing: {
    backgroundColor: Colors.bg_black,
  },
  logo: {
    width: 224,
    height: 42,
  }
});

export default LoginScreen;
