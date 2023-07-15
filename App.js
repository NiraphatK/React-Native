import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText'
import DisplayImage from './components/DisplayImage'
import LotsOfGreeting from './components/LotsOfGreeting'
import MyCustomText from './components/MyCustomText'
const App = () => {
  return (
    <View style = {styles.container}>
     {/* <ViewBoxesWithColorAndText/> */}
      {/* <DisplayImage/> */}
      {/* <LotsOfGreeting/> */}
      <MyCustomText/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center',
  }
 })