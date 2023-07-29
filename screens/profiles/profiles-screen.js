
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


const ProfilesScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <Text>profiles screen</Text>
            <Button title="profile" onPress={()=>navigation.navigate('Profile', {profileID: 1})} />
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        padding: 20,

    }
})

export default ProfilesScreen;