import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  textDay: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  exercicioContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    top: 10,
    paddingVertical: 10, 
    borderColor: '#dcdcdc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  allExercisesContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  allExercisesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },labelContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 35,
  },exercicioItem: {
    flex: 1,
    marginLeft: 5, // Adjust as needed
  },
  
});

export default styles;
