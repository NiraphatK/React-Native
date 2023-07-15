import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const DisplayImage = () => {
  return (
    <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={require('../assets/react_logo.png')}
        />
        <Image
        style={styles.tinyLogo}
        source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
        />
    </View>
  )
}

export default DisplayImage

const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        flex:1,
    },
    tinyLogo:{
        width:50,
        height:50,
    },
    logo:{
        width:66,
        height:58,
    },
})