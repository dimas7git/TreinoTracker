import React, { useState } from 'react';
import { View, Button, Modal, Image, Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style';

const Stack = createStackNavigator();

const Form = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const openMenu = () => {
    setModalVisible(true);
  };

  const closeMenu = () => {
    setModalVisible(false);
  };

  const openWorkout = () => {
    setModalVisible(false);
    navigation.navigate('WorkoutPlan');
  };

  const conteudoMenu = (
    <View style={styles.menuContainer}>
      <View style={styles.menuButton}>
        <Button onPress={openWorkout} title="Abrir cronograma de treino" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/gym1.jpeg')} style={styles.image} flex={1}
      />
      <View style={styles.title}><Text style={styles.title}>TreinoTracker</Text></View>
      <TouchableOpacity style={styles.menuButton} onPress={openMenu}>
        <Image source={require('../../../assets/icon-menu.png')} style={styles.menuIcon}/>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" onRequestClose={closeMenu}>
        {conteudoMenu}
      </Modal>
    </View>
  );
};

export default Form;
