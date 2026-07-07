import { View, StyleSheet, Text } from 'react-native';
import Title from '../components/Title';
function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
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
        borderRadius:20,
        padding: 12

    }
})


export default GameScreen;
