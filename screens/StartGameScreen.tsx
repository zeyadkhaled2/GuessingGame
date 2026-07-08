import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors';

type StartGameScreenProps = {
    onPickNumber: (pickedNumber: number) => void;
};

function StartGameScreen({ onPickNumber }: StartGameScreenProps) {

    const [enteredNumber, setEnteredNumber] = useState('')
    function numberInputHandler (enteredText: string){
        setEnteredNumber(enteredText)
    }
    function confirmInputHandler (){
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <0 || chosenNumber >= 100){
            // show alert
            Alert.alert(
                "Invalid Number",
                "Number has to be a number between 1 and 99.",
                [{text: 'okay' , style: 'destructive', onPress: resetInputHandler}]
            )
            return
        }
        onPickNumber(chosenNumber);
    }
    function resetInputHandler (){
        setEnteredNumber('')
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                value={enteredNumber} 
                onChangeText={numberInputHandler}
                keyboardType='number-pad'
                />
            <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={resetInputHandler}> Reset </PrimaryButton>
                <PrimaryButton onPress={confirmInputHandler}> Confirm </PrimaryButton>
            </View>
        </View>
    )
}

export default StartGameScreen;


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",  // adjusts content along main Axis
        alignItems: "center",     // adjusts content along the cross Axis
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // Android only property
        shadowColor: "black",    // IOS property
        shadowOffset: { width: 0, height: 2 }, // IOS property 
        shadowRadius: 6, // IOS property
        shadowOpacity: 0.25, // IOS property
        flexDirection: 'column'
    },
    numberInput: {
        height: 70,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",

    }
})