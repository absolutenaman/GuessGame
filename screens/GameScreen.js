import { StyleSheet,View, Text } from 'react-native'
import React, { useState } from 'react'
import Title from '../UI/Title'
import NumberContainer from '../components/NumberContainer'
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
const GameScreen = ({value_entered}) => {
  const initialGuess=generateRandomBetween(1,100,value_entered);
  const [currGuess,setCurrGuess]=useState(initialGuess);
  return (
    <View style={styles.screen}>
     <Title titleText="Opponent's Guess"></Title>
     <NumberContainer Guessed_Number={currGuess}></NumberContainer>
     <View>
      <Text>Higher or Lower</Text>
      <Text>+</Text>
      <Text>-</Text>
     </View>
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