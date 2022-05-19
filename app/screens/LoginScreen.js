import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image, NativeModules, TextInput, Button, TouchableOpacity} from "react-native";

import Global from "../config/GlobalStyle";
import Colors from "../config/Colors";

const {StatusBarManager} = NativeModules;

function LoginScreen(props) {

  return (
    <SafeAreaView style={[Global.container, styles.landing]}>
      <StatusBar style="light" />

      <Image 
        style={styles.logo}
        source={require('../assets/logo.png')} 
      />

      <View style={styles.loginSection}>
        <Text style={[Global.text, styles.loginText]}>Login</Text>

        <Text style={[Global.text, styles.pleaseText]}>Please sign in to continue</Text>

        <Text style={[Global.text, Global.inputHeader, styles.usernameHeader]}>Username</Text>
        <TextInput placeholder="Type username" style={Global.inputField}/>


        <Text style={[Global.text, Global.inputHeader,]}>Password</Text>

        <View style={styles.password_Cont}>
          <TextInput placeholder="********" style={[Global.inputField, styles.passInput]}/>

          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={[Global.text, styles.forgotTxt]}>Forgot ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[Global.button, styles.loginBtn]}>
            <Text style={[styles.loginBtnTxt]}>Login</Text>
        </TouchableOpacity>

      </View>

      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  landing: {
    backgroundColor: Colors.bg_black,
    padding: 30,
    alignItems: "center",
  },
  logo: {
    marginTop: 50,
    width: 224,
    height: 42,
  },
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
  pleaseText: {
    color: Colors.white,
    opacity: 0.5,
  },
  usernameHeader: {
    marginTop: 40,
  },
  password_Cont: {
    flexDirection: "row",
  },
  passInput: {
    flex: 3,
  },
  forgotBtn: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  forgotTxt: {
    fontFamily: "poppins-med",
  },
  loginBtn: {
    backgroundColor: Colors.gold,
    marginTop: 40,
    marginLeft: "auto",
  },
  loginBtnTxt: {
    fontFamily: "poppins-bold",
    paddingHorizontal: 20,
  },
  
});

export default LoginScreen;
