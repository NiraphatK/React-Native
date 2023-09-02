import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation}) => {
  return (
    <View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Detail Screen</Text>
        <Text></Text>
         <Button
            title='Go to Details... again'
            onPress={()=>navigation.push('Details')} //.push suitable for server (refresh page)
        />
        <Button
            title='Go to home'
            onPress={()=>navigation.navigate('Home')}
        />
         <Button
            title='Go back'
            onPress={()=>navigation.goBack()}
        />
        
    </View>
  )
}

export default DetailsScreen