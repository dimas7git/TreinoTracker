import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import Title from './src/components/Title'
import Menu from './src/components/Menu'
export default function App() {
  const image = require('./src/components/Images/gym.jpg')
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image} resizeMode="cover" />        
        <Title/>
        <Menu/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
