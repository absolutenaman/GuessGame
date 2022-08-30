import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import color from '../constants/Color'
const NumberContainer = ({Guessed_Number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{Guessed_Number}</Text>
    </View>
  )
}

export default NumberContainer

const styles=StyleSheet.create({
    container:
    {
       borderColor:color.accent500,
       borderWidth:5,
       borderRadius:15,
       justifyContent:'center',
       alignItems:'center',
       marginTop:40,
       paddingVertical:20,
       marginHorizontal:20   
    },
    textContainer:
    {
      color:color.accent500,
      fontSize:40,
      fontWeight:'bold'
    }
})