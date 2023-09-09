import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation,route}) => {

  // 2.Get the params
  const {itemId,otherParam} =  route.params

  return (
    <View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Detail Screen</Text>
        <Text>ItemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>{'\n\n'}</Text>
         <Button
            title='Go to Details... again'
            onPress={()=>navigation.push('Details',{
              itemId : Math.floor(Math.random()*100),
              otherParam: 'uwu'
            })} //.push suitable for server (refresh page)
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