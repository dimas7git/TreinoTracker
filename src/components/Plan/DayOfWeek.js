// DiaDaSemana.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

const DiaDaSemana = ({ dayName, visibleInfo, SelectDay }) => {
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    const loadExercises = async () => {
      try {
        const exerciciosArmazenados = await AsyncStorage.getItem(`exercicios_${dayName}`);
        if (exerciciosArmazenados) {
          setExercicios(JSON.parse(exerciciosArmazenados));
        }
      } catch (error) {
        console.error('Erro ao carregar exercícios:', error);
      }
    };

    loadExercises();
  }, [dayName]);

  const saveExercises = async () => {
    try {
      await AsyncStorage.setItem(`exercicios_${dayName}`, JSON.stringify(exercicios));
    } catch (error) {
      console.error('Erro ao salvar exercícios:', error);
    }
  };

  const addExercise = () => {
    setExercicios((prevState) => [...prevState, { exercicio: '', repeticoes: '', series: '' }]);
  };

  const renderExercise = ({ item, index }) => (
    <View style={styles.exercicioContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nome do exercício"
        value={item.exercicio}
        onChangeText={(text) => updateExercise(text, index, 'exercicio')}
        onBlur={saveExercises}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de repetições"
        value={item.repeticoes}
        onChangeText={(text) => updateExercise(text, index, 'repeticoes')}
        keyboardType="numeric"
        onBlur={saveExercises}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de séries"
        value={item.series}
        onChangeText={(text) => updateExercise(text, index, 'series')}
        keyboardType="numeric"
        onBlur={saveExercises}
      />
    </View>
  );

  const updateExercise = (text, index, campo) => {
    setExercicios((prevState) => {
      const novosExercicios = [...prevState];
      novosExercicios[index][campo] = text;
      return novosExercicios;
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={SelectDay}>
        <Text style={styles.textDay}>{dayName}</Text>
      </TouchableOpacity>
      {visibleInfo && (
        <>
          {exercicios.map((ex, index) => (
            <View key={index}>
              {renderExercise({ item: ex, index })}
            </View>
          ))}
          <TouchableOpacity style={styles.button} onPress={addExercise}>
            <Text style={styles.buttonText}>Adicionar Exercício</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default DiaDaSemana;
