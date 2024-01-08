// DiaDaSemana.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

const DiaDaSemana = ({ dayName, SelectDay, selectedDay }) => {
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    const loadExercises = async () => {
      try {
        const exerciciosArmazenados = await AsyncStorage.getItem(`exercicios_${dayName}`);
        if (exerciciosArmazenados) {
          setExercicios(JSON.parse(exerciciosArmazenados));
        } else {
          setExercicios([]);
        }
      } catch (error) {
        console.error('Erro ao carregar exercícios:', error);
      }
    };
  
    loadExercises();
  }, [dayName, selectedDay]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={SelectDay}>
        <Text style={[styles.textDay, { fontWeight: selectedDay === dayName ? 'bold' : 'normal' }]}>
          {dayName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DiaDaSemana;
