import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function previewScreen(){
    return(
        <SafeAreaView>
            <View>
                <Text>preview Screen</Text>
            </View>
        </SafeAreaView>
    )
}