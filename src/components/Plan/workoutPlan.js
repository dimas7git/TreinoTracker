// WorkoutPlan.js
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import DiaDaSemana from './DayOfWeek';
import styles from './style';

const diasDaSemana = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'];

const WorkoutPlan = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const SelectDay = (dia) => {
    setSelectedDay((prevDia) => (prevDia === dia ? null : dia));
  };

  const renderWeekDay = ({ item }) => (
    <DiaDaSemana
      key={item}
      dayName={item}
      SelectDay={() => SelectDay(item)}
      visibleInfo={selectedDay === item}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={diasDaSemana} renderItem={renderWeekDay} keyExtractor={(item) => item} horizontal/>
    </View>
  );
};

export default WorkoutPlan;
