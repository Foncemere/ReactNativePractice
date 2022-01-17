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
        <View style={Styles.headerContainer}>
          <Text style={Styles.header}>Sign in to your account</Text>
        </View>
        <SignUpInput
          title={'Email'}
          required={true}
          placeholder={'Email or Phone number'}
        />
        <SignUpInput
          title={'Password'}
          required={true}
          placeholder={'Password'}
        />
      </View>
    );
  }
}
