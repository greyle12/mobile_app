import { View, StyleSheet, Text } from "react-native"

const QrCodeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>qr code scan</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddiing: 20,
    }
})

export default QrCodeScreen;