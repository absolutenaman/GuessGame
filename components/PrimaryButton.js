import {StyleSheet, View, Text, Pressable } from 'react-native'
import React from 'react'

const PrimaryButton = ({children,onPress}) => {
  return (
    <View style={styles.ButtonOuterContainer}>
    <Pressable styles={styles.ButtonInnerContainer} android_ripple={{color:"white"}} onPress={onPress} >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    ButtonOuterContainer:
    {
        height:30,
        flex:1,
        borderRadius:10,
        margin:4,
        width:100,
        overflow:"hidden",
        backgroundColor:"#72063c"
    },
    ButtonInnerContainer:
    {

        paddingHorizontal:16,
        paddingVertical:8,
        elevation:2,
    },
    buttonText:
    { 
        color:"white",
        textAlign:'center',
        marginTop:3
    }
})

export default PrimaryButton