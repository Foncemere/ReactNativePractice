import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  main: {
    height: 20,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#000',
  },
  get selectedBackground() {
    return {
      ...this.main,
      backgroundColor: 'red',
    };
  },
});

export default Styles;
