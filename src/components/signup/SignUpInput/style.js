import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  inputContainer: {
    minWidth: 350,
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#a3a6a9',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
  },
  title: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  required: {
    color: '#E24848',
  },
  titleText: {
    color: '#5D6876',
    fontWeight: 'bold',
  },
});

export default Styles;
