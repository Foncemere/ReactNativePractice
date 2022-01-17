import React from 'react';
import {Text, View} from 'react-native';

export default class SignUpCheckBox extends React.PureComponent {
  render() {
    return (
      <View>
        {this.props.checked ? <Text>HEHE</Text> : <Text>Unchecked :(</Text>}
      </View>
    );
  }
}
