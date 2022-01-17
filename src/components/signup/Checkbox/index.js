import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Styles from './style';

export class Checkbox extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={this.props.checked ? Styles.selectedBackground : Styles.main}
      />
    );
  }
}
