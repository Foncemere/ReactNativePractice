import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import Styles from './style';
import Logo from '../../assets/images/Logo.png';
import SignUpInput from '../../components/signup/SignUpInput';

export default class SignUpScreen extends React.PureComponent {
  render() {
    return (
      <View style={Styles.signUp}>
        <Image source={Logo} />
        <SignUpInput
          title={'Email'}
          required={true}
          placeholder={'Email or Phone number'}
        />
      </View>
    );
  }
}
