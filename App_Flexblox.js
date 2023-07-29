import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View
    style = {[
      styles.container,{flexDirection:'column'}
    ]}
    >
      {/* <View style = {{flex:1,backgroundColor:'darkred'}}/>
      <View style = {{flex:2,backgroundColor:'red'}}/>
      <View style = {{flex:3,backgroundColor:'darkorange'}}/> */}
      <View style = {{flex:1,backgroundColor:'darkblue'}}/>
      <View style = {{flex:1,backgroundColor:'skyblue'}}/>
      <View style = {{flex:1,backgroundColor:'steelblue'}}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    
  }
})

export default App