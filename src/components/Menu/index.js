import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import styles from './style';

export default function Form() {
    const [modalVisible, setModalVisible] = useState(false);
  
    const abrirMenu = () => {
      setModalVisible(true);
    };
  
    const fecharMenu = () => {
      setModalVisible(false);
    };
  
    const conteudoMenu = (
      <View style={styles.menuContainer}>
        <Button style={styles.menuText} title="GRADE DE TREINO" />
        <Button style={styles.menuText} title="EVOLUÇÃO" />
        <Button onPress={fecharMenu} title="Fechar Menu" />
      </View>
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.menuButton}>
          <Button onPress={abrirMenu} title="MENU" />
        </View>
  
        <Modal visible={modalVisible} animationType="slide" onRequestClose={fecharMenu}>
          {conteudoMenu}
        </Modal>
      </View>
    );
  }
