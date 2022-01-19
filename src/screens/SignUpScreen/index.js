import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Styles from './style';
import Logo from '../../assets/images/Logo.png';
import SignUpInput from '../../components/signup/SignUpInput';
import SignUpCheckBox from '../../components/signup/SignUpCheckBox';
import LoginWithButton from '../../components/signup/loginWithButton';

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
        <SignUpCheckBox title={'Remember me'} />
        <TouchableOpacity>
          <Text>Forgot the password?</Text>
        </TouchableOpacity>
        <Text>or continue with</Text>
        <View style={Styles.loginFromApp}>
          <LoginWithButton company={'Facebook'} />
          <LoginWithButton company={'Google'} />
        </View>
      </View>
    );
  }
}
