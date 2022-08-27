import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import color from '../constants/Color'
const Title = ({titleText}) => {
  return (
    <View>
       <Text style={styles.title}>{titleText}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    title:
    {
      fontSize:24,
      color:color.accent500,
      borderColor:color.accent500,
      fontWeight:'bold',
      borderWidth:3,
      textAlign:'center',
      padding:12  
    }
});

export default Title