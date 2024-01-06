import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import DiaDaSemana from './DiaDaSemana';
import styles from './style';

const diasDaSemana = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'];

const WorkoutPlan = () => {
  const [informacoesPorDia, setInformacoesPorDia] = useState({});

  const selecionarDia = (dia) => {
    if (informacoesPorDia[dia]) {
      const novasInformacoes = { ...informacoesPorDia };
      delete novasInformacoes[dia];
      setInformacoesPorDia(novasInformacoes);
    } else {
      setInformacoesPorDia((prevState) => ({ ...prevState, [dia]: {} }));
    }
  };

  const renderizarDiaDaSemana = ({ item }) => (
    <DiaDaSemana
      nomeDia={item}
      selecionarDia={() => selecionarDia(item)}
      informacoes={informacoesPorDia[item]}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={diasDaSemana}
        renderItem={renderizarDiaDaSemana}
        keyExtractor={(item) => item}
        horizontal
      />
    </View>
  );
};

export default WorkoutPlan;
