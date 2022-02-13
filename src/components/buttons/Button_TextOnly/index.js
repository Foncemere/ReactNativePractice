import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Styles from './styles';

export default class ButtonText extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={
          this.props?.styles
            ? {...Styles.primaryContainer, ...this.props.styles}
            : Styles.primaryContainer
        }
        onPress={this.props.onPress}>
        {this.props?.title ? (
          <Text>{this.props.title}</Text>
        ) : (
          <Text>Submit</Text>
        )}
      </TouchableOpacity>
    );
  }
}
