import { View, Text, StyleSheet, Pressable } from 'react-native';


function PrimaryButton({ children }) {
    function pressHandler() {
        console.log("Primary button is pressed")
    }

    return (
        <View style={style.buttonOuterContainer}>
            {/* pressed is a boolean which is true when the button is pressed */}
            <Pressable style={({pressed}) => pressed ?  [style.buttonInnerContainer, style.pressed] : style.buttonInnerContainer} onPress={pressHandler} android_ripple={{ color: "#640233", foreground: true }}>
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
        backgroundColor: "#72063c",
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