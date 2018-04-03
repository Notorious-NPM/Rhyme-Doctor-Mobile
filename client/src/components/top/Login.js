import React from 'react';
import axios from 'axios';
import { Text, TouchableOpacity, View } from 'react-native';

import NoSessionBar from '../navbar/NoSessionBar';

import store from '../../redux/store';
import { location, port } from '../../../../config';
import styles from './topCss';
import { Form, loginInfo, options } from './tcombFormCss';

const Login = (props) => {
  const submitHandler = () => {
    const value = this._form.getValue();
    const { username, password } = value;
    axios
      .post(`https://${location}:${port}/api/auth/login`, { username, password })
      .then(() => {
        store.dispatch({
          type: 'sessionlogin',
          body: {
            username,
          },
        });
        props.navigation.navigate('RapPost', { subscription: 1 });
      })
      .catch(err => alert('invalid username/password'));
  };

  return (
    <View style={styles.main}>
      <NoSessionBar nav={props} />
      <View style={styles.form}>
        <Form type={loginInfo} ref={c => this._form = c} options={options} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.innerContainer} onPress={submitHandler}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;