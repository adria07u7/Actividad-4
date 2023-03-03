//Actividad 4 Jorge Adrian Lopez Alcazar 8.-A ISC
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ts } from 'react-native';

export default function App() {

  const [mat1, setMat1] = useState("");
  const [mat2, setMat2] = useState("");
  const [mat3, setMat3] = useState("");
  const [text, setTexto] = useState("");

  const accion  = () => {
    const text = mat1 + mat2 + mat3;
    setTexto(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.cajaTexto}
        value={mat1}
        onChangeText={setMat1}
      />
      <TextInput
        style={styles.cajaTexto}
        value={mat2}
        onChangeText={setMat2}
      />
      <TextInput
        style={styles.cajaTexto}
        value={mat3}
        onChangeText={setMat3}
      />
      <Button
        title="Mostrar texto"
        onPress={accion}
      />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaTexto:{
    borderColor: "gray",
    borderWidth: 2,
    Width: 80 ,
  },
});