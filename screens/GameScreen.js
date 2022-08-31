import { StyleSheet,View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../UI/Title'
import NumberContainer from '../components/NumberContainer'
import PrimaryButton from '../UI/PrimaryButton'
let minBoundary=1
  let maxBoundary=100
function generateRandomBetween(min, max) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  return rndNum;
}

const GameScreen = ({value_entered,onGameOver}) => {
  const initialGuess=generateRandomBetween(1,100,value_entered);
  const [currGuess,setCurrGuess]=useState(initialGuess);
  let currValue=initialGuess;
  

function nextGuessHandler (direction)
{ 
 
  if(direction=='lower' && value_entered>maxBoundary || direction=='higher' && value_entered<minBoundary)
  {
    Alert.alert(
      "Alert Title",
    "You have cheated in the game",
    [
      
      { text: "Sorry!",style:'cancel'}
    ]
      );
      return;
  }
  console.log(minBoundary+" "+maxBoundary);
  if(direction=='lower')
  {
    maxBoundary=currGuess;
    currValue=generateRandomBetween(minBoundary,currGuess-1);
  }
  else
  {
    minBoundary=currGuess;
    currValue=generateRandomBetween(currGuess+1,maxBoundary);
  }
  setCurrGuess(currValue);

 

}
useEffect(()=>{
  if(currGuess==value_entered)
  {
    Alert.alert( "Alert Title",
    "Huh I won Bitch",
    [{text:"Fine!!!!",style:'destructive',onPress:()=>{onGameOver()}}])
    onGameOver();
  }
},[currGuess,value_entered,onGameOver])
  return (
   
    <View style={styles.screen}>
     <Title titleText="Opponent's Guess"></Title>
     <NumberContainer Guessed_Number={currGuess}></NumberContainer>
     <View>
      <Text>Higher or Lower</Text>
      <View style={{flexDirection:'row'}}>
      <PrimaryButton onPress={nextGuessHandler.bind(this,"lower")}>-</PrimaryButton>
      <PrimaryButton onPress={nextGuessHandler.bind(this,"higher")}>+</PrimaryButton>
      </View>
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