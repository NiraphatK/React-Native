import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyInputs from './components/MyInputs'
import IncrementCounter from './components/IncrementCounter'
import Form from './components/Form'
import Login from './components/Login'
import Recap from './components/Recap'

const App = () => {
  return (
    <View style = {styles.container}>
      {/* <MyInputs/> */}
      {/* <IncrementCounter/> */}
      {/* <Form/> */}
      {/* <Login/> */}
      <Recap/>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})