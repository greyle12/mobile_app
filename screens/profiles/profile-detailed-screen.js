import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

const ProfileDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {profileId} = route.params

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: "new title",
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"
                    onPress={()=> {
                        navigation.goBack()
                    }} 
                />
            )
        })
    }, [])

    return (
        <View>
            <Text>This is Profile Detail Screen for {profileId}</Text>
            
        </View>
    );
}


export default ProfileDetailScreen;