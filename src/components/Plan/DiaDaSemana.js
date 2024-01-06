import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

const DiaDaSemana = ({ nomeDia, selecionarDia }) => {
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    // Recupera os exercícios armazenados no AsyncStorage
    const carregarExercicios = async () => {
      try {
        const exerciciosArmazenados = await AsyncStorage.getItem(`exercicios_${nomeDia}`);
        if (exerciciosArmazenados) {
          setExercicios(JSON.parse(exerciciosArmazenados));
        }
      } catch (error) {
        console.error('Erro ao carregar exercícios:', error);
      }
    };

    carregarExercicios();
  }, [nomeDia]);

  const salvarExercicios = async () => {
    // Salva os exercícios no AsyncStorage
    try {
      await AsyncStorage.setItem(`exercicios_${nomeDia}`, JSON.stringify(exercicios));
    } catch (error) {
      console.error('Erro ao salvar exercícios:', error);
    }
  };


  const adicionarExercicio = () => {
    setExercicios((prevState) => [...prevState, { exercicio: '', repeticoes: '', series: '' }]);
  };

  const renderizarExercicio = ({ item, index }) => (
    <View style={styles.exercicioContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nome do exercício"
        value={item.exercicio}
        onChangeText={(text) => atualizarExercicio(text, index, 'exercicio')}
        onBlur={salvarExercicios}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de repetições"
        value={item.repeticoes}
        onChangeText={(text) => atualizarExercicio(text, index, 'repeticoes')}
        keyboardType="numeric"
        onBlur={salvarExercicios}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de séries"
        value={item.series}
        onChangeText={(text) => atualizarExercicio(text, index, 'series')}
        keyboardType="numeric"
        onBlur={salvarExercicios}
      />
    </View>
  );

  const atualizarExercicio = (text, index, campo) => {
    setExercicios((prevState) => {
      const novosExercicios = [...prevState];
      novosExercicios[index][campo] = text;
      return novosExercicios;
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selecionarDia}>
        <Text style={styles.textDay}>{nomeDia}</Text>
      </TouchableOpacity>
      {exercicios.map((ex, index) => (
        <View key={index}>
          {renderizarExercicio({ item: ex, index })}
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={adicionarExercicio}>
        <Text style={styles.buttonText}>Adicionar Exercício</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DiaDaSemana;
