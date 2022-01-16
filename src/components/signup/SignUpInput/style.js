import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    width: 300,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#656F7C',
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
