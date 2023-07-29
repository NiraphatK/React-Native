import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import TouchableExample from './components/TouchableExample'

const App = () => {
  return (
    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableExample/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})