import React from 'react';
import {Text, View} from 'react-native';
import {Checkbox} from '../Checkbox';
import Styles from './styles';

export default class SignUpCheckBox extends React.PureComponent {
  state = {
    checked: false,
  };

  onPress = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <View style={Styles.main}>
        <Checkbox onPress={this.onPress} checked={this.state.checked} />
        <Text style={Styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}
