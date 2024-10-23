import React from 'react';
import {Button, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {Input} from '@rneui/themed';

import {useLoginViewModel} from './LoginViewModel';

const LogInSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

type ILogin = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const {login, errorInLogIn} = useLoginViewModel();

  const onHandlerLogIn = ({email, password}: ILogin) => {
    login(email, password);
  };

  return (
    <View style={{flex: 1}}>
      <Text>
        Login
        {errorInLogIn && errorInLogIn === 'Error'
          ? 'Ufff, credenciales invalida'
          : ''}
      </Text>

      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LogInSchema}
        onSubmit={values => onHandlerLogIn(values as ILogin)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View>
            <Input
              label={'Email'}
              placeholder={'Email'}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              errorStyle={{color: 'red'}}
              errorMessage={errors.email}
            />
            <Input
              label={'Password'}
              placeholder={'Password'}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errorStyle={{color: 'red'}}
              errorMessage={errors.password}
              secureTextEntry={true}
            />
            <Button onPress={() => handleSubmit()} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
