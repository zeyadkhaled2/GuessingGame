import { View, StyleSheet, Text, Alert } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(
    min: number,
    max: number,
    exclude: number
): number {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
}

let minBoundary = 1;
let maxBoundary = 100;



function GameScreen({ userNumber, onGameOver}) {
    const initalGuess = generateRandomBetween
        (1,
        100,
        userNumber)
    const [currentGuess, setCurrentGuess] = useState(initalGuess)
    
    useEffect(() => {
        if (currentGuess === userNumber){
            onGameOver();
        }
    } , [currentGuess,userNumber,onGameOver])

    function nextGuessHandler(direction: string) { // lower or greater
        if ((direction === 'lower'  && currentGuess < userNumber) || 
           (direction === 'greater'  && currentGuess > userNumber)){
            Alert.alert("Don't lie !!", "You know its wrong",[{text: "Sorry", style: 'cancel'}]);
            return;    
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess - 1
        }
        else{
            minBoundary = currentGuess + 1
        }
        console.log(minBoundary, maxBoundary)
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
    }


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>

            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#ddb52f",
        textAlign: 'center',
        borderWidth: 2,
        borderColor: "#ddb52f",
        borderRadius: 20,
        padding: 12
    },

})


export default GameScreen;
