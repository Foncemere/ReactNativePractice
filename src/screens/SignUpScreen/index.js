import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Styles from './style';
import Logo from '../../assets/images/Logo.png';
import SignUpInput from '../../components/signup/SignUpInput';
import SignUpCheckBox from '../../components/signup/SignUpCheckBox';
import ButtonWithIcon from '../../components/signup/ButtonWithIcon';
import PrimaryButton from '../../components/signup/PrimaryButton';
import ButtonText from '../../components/buttons/Button_TextOnly';

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
        <PrimaryButton title={'Sign In'} />
        <ButtonText title={'Forgot the password?'} />
        <Text>or continue with</Text>
        <View style={Styles.loginFromApp}>
          <ButtonWithIcon company={'Facebook'} />
          <ButtonWithIcon company={'Google'} />
        </View>
      </View>
    );
  }
}
