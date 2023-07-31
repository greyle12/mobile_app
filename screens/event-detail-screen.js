import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
const EventDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const { eventId, title, description} = route.params

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: "new title",
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"
                    label="previous"
                    onPress={()=> navigation.goBack()} 
                />
            )
        })
    }, [])

    return (
        <View style={styles.screen}>
            <Text style={{fontSize: 20}}>This is Event Detail Screen for {eventId}</Text>
            <Text style={{fontSize: 20}}> {title}</Text>
            <Text style={{fontSize: 20}}>{description}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        padding: 20,

    }
})

export default EventDetailScreen;