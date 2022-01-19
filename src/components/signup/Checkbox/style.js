import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  main: {
    height: 20,
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#F55772',
  },
  get selectedBackground() {
    return {
      ...this.main,
      backgroundColor: 'red',
    };
  },
});

export default Styles;
