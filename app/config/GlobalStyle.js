import {
  StyleSheet,
  Platform,
  NativeModules,
} from "react-native";
import Colors from "./Colors";

const { StatusBarManager } = NativeModules;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
    padding: 20,
  },
  text: {
    fontSize: 14,
    fontFamily: "poppins",
  },
  bigHeader: {
    fontSize: 30,
    color: Colors.gold,
    fontFamily: "poppins-bold",
  },
  inputHeader: {
    color: Colors.white,
    fontFamily: "poppins-med",
    marginBottom: 5,
    marginTop: 20,
  },
  inputField: {
    backgroundColor: Colors.white,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
