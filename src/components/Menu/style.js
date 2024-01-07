import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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

});

export default styles