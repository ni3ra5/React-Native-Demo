import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import Global from "../config/GlobalStyle";
import Colors from "../config/Colors";

const TabViewScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[Global.container, styles.container]}>
      <StatusBar style="auto" />

      <Text style={[Global.text, Global.bigHeader, styles.bigHeader]}>Tab view</Text>

      <View style={styles.row}>

        <View style={[styles.box,styles.box1]}></View>
        <View style={[styles.box,styles.box2]}></View>


      </View>



      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  item: {
    fontSize: 20,
    backgroundColor: Colors.bg_black,
    color: Colors.gold,
    padding: 30,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
  bigHeader: {
    // marginLeft: 20,
  },
  row: {
    flexDirection: "row",
  },
  box: {
    width: 50,
    height: 50,
    display: "flex",
    flex: 1,
  },
  box1: {
    backgroundColor: "red",
    // display: "none",
  },
  box2: {
    backgroundColor: "blue",
    // display: "none",

  }
});

export default TabViewScreen;
