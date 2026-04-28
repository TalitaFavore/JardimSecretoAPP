import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterScreen({navigation}) {
    return (
        <View>
            <Text>Crie sua conta</Text>

            <Text>Nome</Text>

            <TextInput placeholder="Digite seu nome" />

            <Text>E-mail</Text>

            <TextInput placeholder="Digite seu e-mail" />

            <Text>Senha</Text>

            <TextInput placeholder="Digite sua senha" />

            <Text>Confirme sua senha</Text>

            <TextInput placeholder="Digite sua senha novamente" />

            <TouchableOpacity
                onPress={() => navigation.navigate("Tabs")}
            >
                <Text>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
}