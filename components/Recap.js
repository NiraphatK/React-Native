import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-web'

const Recap = () => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const alertButton = () => {
        if (email != '' && pass != ''){
            alert('email: '+email+'\npassword: '+pass)
        }
        else{
            alert('Enter your email and password')
        }
    }
  return (
    <View style = {styles.container}>
     <TextInput
      placeholder='Email'
      style = {styles.input}
      value={email}
      onChangeText={(value)=>{setEmail(value)}}
     />
     
     <TextInput
      placeholder='Password'
      style = {styles.input}
      value={pass}
      onChangeText={(value)=>{setPass(value)}}
     />
     
     <Button
     title = 'Submit'
     style = {styles.submitButton}
     onPress = {alertButton}
     />
    </View>
  )
}

export default Recap

const styles = StyleSheet.create({
    container:{
        paddingTop:23
    },
    input:{
        margin:15,
        height:40,
        borderColor:'#7a42f4',
        borderWidth:1
    },
    submitButton:{
        backgroundColor:'#7a42f4',
        padding:10,
        margin:15,
        height:40,
    },
    submitButtonText:{
        color:'white'
    }
})