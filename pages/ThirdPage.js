import { View, Text , Button,StyleSheet} from 'react-native'
import React from 'react'

const ThirdPage = ({navigation}) => {
  return (
    <View style = {styles.container}> 
       <Text style = {textStyle}>This is the Third Page of the app</Text>
       <Button
            title='Go back'
            onPress={()=>navigation.goBack()} //.push suitable for server (refresh page)
        />
         <Button
            title='Go to second page'
            onPress={()=>navigation.navigate('SecondPage')}
        />
         <Button
            title='Reset navigator to first page'
            onPress={()=>navigation.navigate('FirstPage')} //.push suitable for server (refresh page)
        />
        
    </View>
  )
}

export default ThirdPage

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