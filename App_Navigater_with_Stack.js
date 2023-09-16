import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'

function Feed(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Feed</Text>
    </View>
  )
}
function Article(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Article</Text>
    </View>
  )
}

function FirstScreenStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#008b8b',
        width:240,
      },
    }}>
      <Stack.Screen
      name='FirstPage'
      component={FirstPage}
      />
    </Stack.Navigator>
  )
}
function SecondScreenStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#008b8b',
        width:240,
      },
    }}>
      <Stack.Screen
      name='SecondPage'
      component={SecondPage}
      />
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function MyDrawer(){
  return(
    <Drawer.Navigator
    screenOptions={{
      drawerStyle:{
        backgroundColor:'#f0f8f5',
        width:240,
      },
    }}
    >    
      <Drawer.Screen 
      name='FirstDrawer' 
      component={FirstScreenStack}
      options={{drawerLabel:'First Page Option'}}
      />
      <Drawer.Screen 
      name='SecondDrawer' 
      component={SecondScreenStack}
      options={{drawerLabel:'Second Page Option'}}
      />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App