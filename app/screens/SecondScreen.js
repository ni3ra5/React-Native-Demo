import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image, NativeModules, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from "react-native";

import Global from "../config/GlobalStyle";
import Colors from "../config/Colors";

function SecondScreen(props) {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <SafeAreaView style={[Global.container, styles.landing]}>
      <StatusBar style="auto" />
      

      <View style={styles.loginSection}>
        <Text style={[Global.text, styles.loginText]}>2nd screen</Text>
      </View>

      
      
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    loginSection: {
    marginTop: 100,
    width: "100%",
    alignItems: "flex-start",
  },
  loginText: {
    fontSize: 30,
    color: Colors.gold,
    fontFamily: "poppins-bold",
  },
  
});

export default SecondScreen;
