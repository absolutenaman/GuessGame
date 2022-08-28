import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import { TextInput, StyleSheet } from "react-native";
import color from "../constants/Color";
const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setenteredNumber] = useState("");
 
  function resetHandlerInput()
  {
    setenteredNumber("");
    console.log("reset handler called");
  }
  function confirmInputHandler() {
    let chosenNumber = parseInt(enteredNumber);

    if (chosenNumber <= 0 || chosenNumber >= 99 || isNaN(chosenNumber)) {
      Alert.alert(
        "Alert Title",
      "The Number should be between 0 & 99",
      [
        
        { text: "OK", onPress: () =>resetHandlerInput()}
      ]
        );

      return;}
      onPickNumber(enteredNumber);
    
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        value={enteredNumber}
        editable={true}
        keyboardType="number-pad"
        onChangeText={(newText)=>setenteredNumber(newText)}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetHandlerInput}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: color.primary500,
    elevation: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: color.accent500,
    borderBottomWidth: 2,
    borderBottomColor: color.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    color: "#ddb52f",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default StartGameScreen;
