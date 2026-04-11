import { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log("O nome foi atualizado:", nome);
  }, [nome]);

  return (
    <View>
      <View>
        <Text>Tela de Home 📱</Text>
      </View>

      <Text>Digite seu nome:</Text>

      <TextInput
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text>Nome digitado: {nome}</Text>
    </View>
  );
}