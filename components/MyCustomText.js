import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({name,lastname}) => {
  return (
    <View>
        <Text>Your First Name is {name}! and Last name is {lastname}</Text>
    </View>
  )
}
const MyCustomText = () => {
  return (
    <View style = {{alignItems:'center',justifyContent:'center',flex:1}}>
      <MyCustomTextWith name= "Niraphat" lastname="Konghuayrob"/>
      <MyCustomTextWith name= "Jackky" lastname="Haffu"/>
     
    </View>
  )
}

export default MyCustomText