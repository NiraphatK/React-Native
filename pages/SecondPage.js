import { View, Text, Button ,StyleSheet} from 'react-native'
import React from 'react'

const SecondPage = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <Text style = {styles.textStyle}>This is the Second Page of the app</Text>
       <Button
            title='Go back'
            onPress={()=>navigation.goBack()}
        />
        <Button
            title='Go to secondpage... again'
            onPress={()=>navigation.push('SecondPage')}
        />
         <Button
            title='Go to first page'
            onPress={()=>navigation.navigate('FirstPage')}
        />
        <Button
            title='Go to third page'
            onPress={()=>navigation.navigate('ThirdPage')}
        />
        
    </View>
  )
}

export default SecondPage

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    },
    textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
    },
    })