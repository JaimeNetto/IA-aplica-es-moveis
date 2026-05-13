import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(){
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.logo}>DevCard</Text>
                <Text style={styles.subtitle}>Seu cartão de visita digital de Dev Mobile</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Criar Meu Cartão</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "90%",
        justifyContent: "center",
        alignContent: "center",
    },
    headerContainer: {},
    logo: {
        color: "#8730ce",
        fontWeight: "bold",
        fontSize: 60,
        textAlign: "center"
    },
    subtitle: {
        color: "#8730ce",
        fontWeight: "400",
        fontSize: 15
    },
    buttonContainer: {
        backgroundColor: "#8730ce",
        
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "800",
        fontSize: 15,
        textAlign: "center"
        
    },
})