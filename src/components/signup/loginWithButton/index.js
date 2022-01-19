import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './styles';

export default class LoginWithButton extends React.PureComponent {
  onPress = () => {};

  render() {
    return (
      <TouchableOpacity style={Styles.main} onPress={this.onPress}>
        <Text style={Styles.company}>{this.props.company}</Text>
      </TouchableOpacity>
    );
  }
}
