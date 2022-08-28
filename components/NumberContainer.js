import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const NumberContainer = ({Guessed_Number}) => {
  return (
    <View style={styles.container}>
      <Text>{Guessed_Number}</Text>
    </View>
  )
}

export default NumberContainer

const styles=StyleSheet.create({
    container:
    {
        
    },
    textContainer:
    {

    }
})