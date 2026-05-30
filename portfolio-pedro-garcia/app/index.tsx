import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        Pedro Garcia
      </Text>

      <Text>
        Estudante de Ciência da Computação
      </Text>

      <Button title="Sobre" onPress={() => router.push("/sobre")} />
      <Button title="Experiência Acadêmica" onPress={() => router.push("/academica")} />
      <Button title="Experiência Profissional" onPress={() => router.push("/profissional")} />
      <Button title="Projetos" onPress={() => router.push("/projetos")} />
      <Button title="Jogo" onPress={() => router.push("/jogo")} />
    </View>
  );
}