import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RandomUserScreen from './components/RandomUserScreen.js'
import FlatList_Example1 from './components/FlatList_Example1.js'
import FlatList_HeaderFooter from "./components/FlatList_HeaderFooter.js";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RandomUserScreen/> */}
      {/* <FlatList_Example1/> */}
      <FlatList_HeaderFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
