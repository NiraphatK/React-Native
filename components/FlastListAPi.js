import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";

const FlastListAPi = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [dateSource, setDatasource] = useState([]);

  // Service to get the data from the server to render
  const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setDatasource(responseJson);
        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const ItemSeparaterView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#c8c8c8",
        }}
      />
    );
  };

  const onRefresh = () => {
    //Clear old data of the list
    setDatasource([]);
    //Call the service to get the latest data
    getData();
  };

  const getItem = (item) => {
    //Function for click on an item

    alert("Id : " + item.id + " Title : " + item.title);
  };

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.title}
      </Text>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {refreshing ? <ActivityIndicator /> : null}
        <FlatList
          data={dateSource}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={ItemSeparaterView}
          renderItem={ItemView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default FlastListAPi;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
  },
  itemStyle: {
    fontSize: 20,
    padding: 10,
  },
});
