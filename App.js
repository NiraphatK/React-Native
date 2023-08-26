import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RandomUserScreen from './components/RandomUserScreen.js'
import FlatList_Example1 from './components/FlatList_Example1.js'
import FlatList_HeaderFooter from "./components/FlatList_HeaderFooter.js";
import FlastListAPi from "./components/FlastListAPi.js";
import News from "./components/News.js";
import ProductScreen from "./components/ProductScreen.js";



export default function App() {
  return (
    <View>
      {/* <RandomUserScreen/> */}
      {/* <FlatList_Example1/> */}
      {/* <FlatList_HeaderFooter/> */}
      {/* <FlastListAPi/> */}
      {/* <News/> */}
      <ProductScreen/>
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
