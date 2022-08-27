import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import Title from '../components/Title'
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
const GameScreen = ({value_entered}) => {
  return (
    <View style={styles.screen}>
     <Title titleText="Opponent's Guess"></Title>
    </View>
  )
}
const styles=StyleSheet.create({
  screen:
  {
    flex:1,
    padding:10,
    marginTop:60
  },
 
})

export default GameScreen