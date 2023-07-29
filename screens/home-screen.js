import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EventList from "../components/event-list";

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <EventList/>
            <Button title="move to detail" onPress={()=>navigation.navigate('Event')} />
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        padding: 20,

    }
})

export default HomeScreen;
