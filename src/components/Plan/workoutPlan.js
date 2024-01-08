// WorkoutPlan.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DiaDaSemana from './DayOfWeek';
import styles from './style';

const diasDaSemana = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'];

const WorkoutPlan = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [allExercises, setAllExercises] = useState([]);
  const [currentExercise, setCurrentExercise] = useState({ exercicio: '', repeticoes: '', series: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const loadExercises = async () => {
      try {
        const dayToLoad = selectedDay || diasDaSemana[0];
        const storedExercises = await AsyncStorage.getItem(`exercicios_${dayToLoad}`);
        if (storedExercises) {
          setAllExercises(JSON.parse(storedExercises));
        } else {
          setAllExercises([]);
        }
      } catch (error) {
        console.error('Erro ao carregar exercícios:', error);
      }
    };

    loadExercises();
  }, [selectedDay]);

  useEffect(() => {
    saveExercises();
  }, [allExercises, selectedDay]);

  const SelectDay = (dia) => {
    setSelectedDay((prevDia) => (prevDia === dia ? null : dia));
    setShowAddExercise(false);
    setIsEditing(false);
    setCurrentExercise({ exercicio: '', repeticoes: '', series: '' });
    setEditIndex(null);
  };

  const toggleAddExercise = () => {
    setShowAddExercise((prevState) => !prevState);
    setCurrentExercise({ exercicio: '', repeticoes: '', series: '' });
    setIsEditing(false);
    setEditIndex(null);
  };

  const addExercise = () => {
    if (isEditing) {
      const updatedExercises = [...allExercises];
      updatedExercises[editIndex] = currentExercise;
      setAllExercises(updatedExercises);
    } else {
      setAllExercises([...allExercises, currentExercise]);
    }

    setIsEditing(false);
    setEditIndex(null);
    setCurrentExercise({ exercicio: '', repeticoes: '', series: '' });
  };

  const updateExercise = (text, campo) => {
    setCurrentExercise((prevExercise) => ({
      ...prevExercise,
      [campo]: text,
    }));
  };

  const editExercise = (exercise, index) => {
    setCurrentExercise(exercise);
    setIsEditing(true);
    setEditIndex(index);
    setShowAddExercise(true);
  };

  const deleteExercise = (index) => {
    const updatedExercises = [...allExercises];
    updatedExercises.splice(index, 1);
    setAllExercises(updatedExercises);
    saveExercises();
  };

  const saveExercises = async () => {
    try {
      if (selectedDay) {
        await AsyncStorage.setItem(`exercicios_${selectedDay}`, JSON.stringify(allExercises));
      }
    } catch (error) {
      console.error('Erro ao salvar exercícios:', error);
    }
  };


  const renderWeekDay = ({ item }) => (
    <DiaDaSemana
      key={item}
      dayName={item}
      SelectDay={() => SelectDay(item)}
      visibleInfo={selectedDay === item}
      showAddExercise={showAddExercise}
      toggleAddExercise={toggleAddExercise}
      allExercises={allExercises}
      currentExercise={currentExercise}
      updateExercise={updateExercise}
      editExercise={editExercise}
      deleteExercise={deleteExercise}
      isEditing={isEditing}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={diasDaSemana} renderItem={renderWeekDay} keyExtractor={(item) => item} horizontal />

      <View style={styles.allExercisesContainer}>
        {selectedDay && (
          <>
            <Text style={styles.allExercisesTitle}>{`Exercícios de ${selectedDay}`}</Text>
            <View>
              {allExercises.length > 0 && (
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Nome</Text>
                  <Text style={styles.label}>Repetições</Text>
                  <Text style={styles.label}>Séries</Text>
                </View>
              )}
              <FlatList
                data={allExercises}
                renderItem={({ item, index }) => (
                  <View style={styles.exercicioContainer}>
                    <View style={styles.exercicioItem}>
                      <Text>{item.exercicio}</Text>
                    </View>
                    <View style={styles.exercicioItem}>
                      <Text>{item.repeticoes}</Text>
                    </View>
                    <View style={styles.exercicioItem}>
                      <Text>{item.series}</Text>
                    </View>
                    <TouchableOpacity onPress={() => editExercise(item, index)}>
                      <Text style={{ color: 'blue', marginRight: 10 }}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteExercise(index)}>
                      <Text style={{ color: 'red' }}>Excluir</Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

          </>
        )}

        {selectedDay && (
          <View style={styles.addExerciseContainer}>
            {showAddExercise ? (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Nome do exercício"
                  value={currentExercise.exercicio}
                  onChangeText={(text) => updateExercise(text, 'exercicio')}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Número de repetições"
                  value={currentExercise.repeticoes}
                  onChangeText={(text) => updateExercise(text, 'repeticoes')}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Número de séries"
                  value={currentExercise.series}
                  onChangeText={(text) => updateExercise(text, 'series')}
                  keyboardType="numeric"
                />
                <TouchableOpacity style={styles.button} onPress={addExercise}>
                  <Text style={styles.buttonText}>{isEditing ? 'Editar Exercício' : 'Adicionar Exercício'}</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity style={styles.button} onPress={toggleAddExercise}>
                <Text style={styles.buttonText}>Adicionar Exercício</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default WorkoutPlan;
