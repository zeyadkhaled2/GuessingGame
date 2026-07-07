import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
    function pressHandler() {
        console.log("Primary button is pressed")
    }

    return (
        <View style={style.buttonOuterContainer}>
            {/* pressed is a boolean which is true when the button is pressed */}
            <Pressable
                style={({ pressed }) => pressed ? [style.buttonInnerContainer, style.pressed] : style.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{ color: Colors.primary600, foreground: true }}>
                <Text style={style.buttonText}> {children} </Text>
            </Pressable>
        </View>
    )
}
export default PrimaryButton
const style = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // android only shadow
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75,

    }

})