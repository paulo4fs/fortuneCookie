import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import biscoitoInteiro from './src/assets/images/biscoito.png';
import biscoitoQuebrado from './src/assets/images/biscoitoAberto.png';
import lista from './src/assets/lista/frases.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPhrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default function App() {
  let [frase, setFrases] = useState('');
  let [biscoito, setBiscoito] = useState(true);
  
  function quebraBiscoito() {
    let textoNovo = lista.data[Math.floor(Math.random() * lista.data.length)];
    setBiscoito(false);
    setFrases(`"${textoNovo}"`);
    setTimeout(() => {
      setBiscoito(true);
    }, 5 * 1000);
  }
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={biscoito ? biscoitoInteiro : biscoitoQuebrado}
      />
      <Text style={styles.textPhrase}>{frase}</Text>
      <TouchableOpacity style={styles.button} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
