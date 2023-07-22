import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web';

const MyInputs = () => {

    const[text,setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Enter Text'
      style = {styles.textInputStlye}
      value= {text}
      onChangeText={(value)=>{setText(value)}}
      />
      <Text>{'\n\n'}You typed : {text}</Text>
      <Button
      title='Reset'
      onPress={()=>{setText('Hello')}}
      />
    </View>
  )
}

export default MyInputs

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    textInputStlye:{
        width:'100%',
        height:40,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginTop:15
    }
})