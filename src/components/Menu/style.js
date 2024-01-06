import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      menuText: {
        fontSize: 18,
        marginBottom: 10,
      },
      text:{
        top: 100, 
      },
      title:{
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
      },
      image: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      menuButton: {
        position: 'absolute',
        top: 40,
        right: 0,
        backgroundColor: 'transparent',
      },
      menuIcon:{
        width: 100, 
        height: 100,
      },  
});

export default styles