import React, { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen' 
 
export default function App() {
  const [pickedNumber,setPickedNumber]=useState();
  const [screen,setScreen]=useState(<StartGameScreen onPickNumber={onPickedNumberHandler}/>);
  const [gameIsOver,setGameIsOver]=useState(true);
  function gameOverHandler()
  {
    setGameIsOver(true);
    setScreen(<GameOverScreen />);

  }  
  function onPickedNumberHandler(data)
  {
    setPickedNumber(data);
    setScreen(<GameScreen value_entered={data} onGameOver={gameOverHandler}></GameScreen>)
  }
  // if(gameIsOver && pickedNumber!=undefined)
  // {
  //   setScreen(<GameOverScreen />);
  // }
 
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
     <ImageBackground source={require('./images/background.png')}
      resizeMode="cover"
      style={{...styles.rootScreen}}
      imageStyle={{opacity:0.15}}
     >
      <SafeAreaView style={styles.rootScreen}>
      {screen}
      </SafeAreaView>
     </ImageBackground>
     </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:
  {
    flex:1,
  }
});
