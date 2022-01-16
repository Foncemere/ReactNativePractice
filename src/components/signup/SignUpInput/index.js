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
        <Text>
          {this.props.title}
          {this.props.required ? '*' : ''}
        </Text>
        <TextInput
          style={Styles.textInput}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}
