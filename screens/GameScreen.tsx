import { View, StyleSheet, Text } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';

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



function GameScreen({userNumber}) {
    const initalGuess = generateRandomBetween(1,100,userNumber)
    const [currentGuess, setCurrentGuess] = useState(initalGuess)



    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
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

    }
})


export default GameScreen;
