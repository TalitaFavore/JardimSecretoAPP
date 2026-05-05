import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SplashScreen({ navigation }) {

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Jardim Secreto</Text>
            
            <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
            
            <Text style={styles.subtitle}>Onde a natureza revela seus pequenos segredos</Text>

            <TouchableOpacity 
            style={styles.buttonCustom}
            onPress={() => navigation.navigate("Cadastro")}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9E2D5",
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        width: 180,
        height: 180,
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#4A5D23",
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 14,
        color: "#4A5D23",
        marginTop: 50,
        marginBottom: 50,
    },

    buttonCustom: {
        backgroundColor: "#4A5D23",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        elevation: 3, // sombra Android
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
});