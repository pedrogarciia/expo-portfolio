import { Text, View } from "react-native";

export default function Sobre() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Sobre</Text>

      <Text>
        Este aplicativo foi desenvolvido utilizando:
      </Text>

      <Text>• React Native</Text>
      <Text>• Expo</Text>
      <Text>• Expo Router</Text>
      <Text>• JavaScript</Text>
      <Text>• TypeScript</Text>
      <Text>• Git e GitHub</Text>
    </View>
  );
}