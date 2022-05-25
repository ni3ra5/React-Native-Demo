import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import Global from "../config/GlobalStyle";
import Colors from "../config/Colors";

const SecondScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[Global.container, styles.container]}>
      <StatusBar style="auto" />

      <Text style={[Global.text, Global.bigHeader, styles.bigHeader]}>Scroll view</Text>

      <ScrollView>
        <Text onPress={() => navigation.navigate('TabViewScreen')} style={[styles.item]}>Tab view </Text>
        <Text style={[styles.item]}>Item </Text>
        <Text style={[styles.item]}>Item </Text>
        <Text style={[styles.item]}>Item </Text>
        <Text style={[styles.item]}>Item </Text>
        <Text style={[styles.item]}>Item </Text>
        <Text style={[styles.item]}>Item </Text>
        <Text style={[styles.item]}>Item </Text>
        <Text style={[styles.item]}>Item </Text>
        <Text style={[styles.item]}>Item </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    
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
  'item:first-child': {
    backgroundColor: "red",
    marginBottom: 50,
  },
  bigHeader: {
    marginLeft: 20,
  }
});

export default SecondScreen;
