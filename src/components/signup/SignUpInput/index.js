/*
expected props,
- required, so a red * will appear
- title
- placeholder text
- type
 */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Styles from './style';

export default class SignUpInput extends React.PureComponent {
  render() {
    return (
      <View style={Styles.inputContainer}>
        <View style={Styles.title}>
          <Text style={Styles.titleText}>{this.props.title}</Text>
          <Text style={Styles.required}>{this.props.required ? '*' : ''}</Text>
        </View>
        <TextInput
          style={Styles.textInput}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}
