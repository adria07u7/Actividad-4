//Actividad 4 Jorge Adrian Lopez Alcazar 8.-A ISC
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ts } from 'react-native';

export default function App() {

  const [mat1, setMat1] = useState("");
  const [mat2, setMat2] = useState("");
  const [mat3, setMat3] = useState("");
  const [text, setTexto] = useState("");
  const [texto1, setTexto1] = useState();
  const [texto2, setTexto2] = useState();
  
  
  /* const [titulo] = useState("");
  const [activo, setActivo] = useState(true); */

  /* const accion  = () => {
    
    const text = mat1 + mat2 + mat3;
    setTexto(text);
    setTexto1(text1);
    setTexto2(text2);
    
  }; */
  const accion  = () => {
    const text = mat1;
    const text1 = mat2;
    const text2 = mat3;
    setTexto(text);
    setTexto1(text1);
    setTexto2(text2);
  };

  return (
    
    <View style={styles.container}>
      <Text style = {styles.titulo}>
      {/* <Text style={styles.setTexto}>" {texto} "</Text>
      <Text style={styles.setTexto}>" {texto1} "</Text>
      <Text style={styles.settexto}>" {texto2} "</Text> */}

        Registro de Materias
        
      </Text>
            <Text>
             Materia 1
            </Text>
      <TextInput 
        style={styles.cajaTexto}
        value={mat1}
        onChangeText={setMat1}
      />
            <Text>
             Materia 2
            </Text>
      <TextInput
        style={styles.cajaTexto}
        value={mat2}
        onChangeText={setMat2}
      />
            <Text>
             Materia 3
            </Text>
      <TextInput
        style={styles.cajaTexto}
        value={mat3}
        onChangeText={setMat3}
      />
<Text></Text> 
      <Button
        title= " Mostrar Materias"
        onPress={accion}
      /> 
<Text></Text> 
      <Text style={styles.textoo}>
        Las Materias Son:
      </Text>
      <Text style={styles.textoo}>" {text} "</Text>
      <Text style={styles.textoo}>" {texto1} "</Text>
      <Text style={styles.textoo}>" {texto2} "</Text>
      
    </View>
    
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    margin:10,
    fontSize: 20,
    color: 'darkred',
    fontWeight: 'bold',
  },
  cajaTexto:{
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    minWidth: 300,
    padding: 10,
    margin:15,

  },
  textoo:{
    margin:10,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  }
 
}); 