import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Button,
} from "react-native";
import React from "react";

const Separator = () => 
  <View style={styles.separator} />;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.title}>
        <Text>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
        title="Press me"
        onPress={() => alert('Simple Button pressed')}
        />
      </View>
      <Separator/>
      <View style = {styles.title}>
        <Text>
        Adjust the color in a way that looks standard on each platform. On iOS,
the color prop controls the color of the text. On Android, the color
adjusts the background color of the button.
        </Text>
        <Button
        title="Press me"
        color = '#414141'
        onPress={() => alert('Simple Button pressed')}
        />
      </View>
      <Separator/>
      <View style = {styles.title}>
        <Text>
        All interaction for the component are disabled.
        </Text>
        <Button
        title="Press me"
        onPress={() => alert('Simple Button pressed')}
        disabled
        />
      </View>
      <Separator/>
      <View style = {styles.title}>
        <Text>
        This layout strategy lets the title define the width of the button.
        </Text>   
      </View>

      <View style = {styles.fixToText}>
      <Button
        title="Left Button"
        onPress={() => alert('Left Button pressed')}
        color = 'pink'
        />
        <Button
        title="Right Button"
        onPress={() => alert('Right Button pressed')}
        color = 'purple'
        />
      </View>
      
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "steelblue",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
