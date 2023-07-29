import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
const ProfileDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const { profileId} = route.params

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: "new title",
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"
                    onPress={()=> navigation.goBack()} 
                />
            )
        })
    }, [])

    return (
        <View style={styles.screen}>
            <Text style={{fontSize: 20}}>Profile id: {profileId}</Text>
            
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        padding: 20,

    }
})

export default ProfileDetailScreen;