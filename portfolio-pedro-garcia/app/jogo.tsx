import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const PALAVRA = "REACT";

export default function Jogo() {
  const [letras, setLetras] = useState<string[]>([]);
  const [entrada, setEntrada] = useState("");

  const erros = letras.filter(
    (l) => !PALAVRA.includes(l)
  ).length;

  function tentar() {
    const letra = entrada.toUpperCase();

    if (
      letra.length === 1 &&
      !letras.includes(letra)
    ) {
      setLetras([...letras, letra]);
    }

    setEntrada("");
  }

  const palavraExibida = PALAVRA.split("")
    .map((letra) =>
      letras.includes(letra) ? letra : "_"
    )
    .join(" ");

  const venceu = !palavraExibida.includes("_");
  const perdeu = erros >= 6;

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Jogo da Forca
      </Text>

      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        {palavraExibida}
      </Text>

      <Text
        style={{
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Erros: {erros}/6
      </Text>

      {!venceu && !perdeu && (
        <>
          <TextInput
            value={entrada}
            onChangeText={setEntrada}
            placeholder="Digite uma letra"
            maxLength={1}
            style={{
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
            }}
          />

          <Button
            title="Tentar"
            onPress={tentar}
          />
        </>
      )}

      {venceu && (
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Você venceu!
        </Text>
      )}

      {perdeu && (
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Você perdeu! A palavra era {PALAVRA}
        </Text>
      )}

      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Letras usadas: {letras.join(", ")}
      </Text>
    </View>
  );
}