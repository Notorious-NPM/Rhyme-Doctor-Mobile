import React from 'react';
import axios from 'axios';
import { Text, TouchableOpacity, View } from 'react-native';

import NoSessionBar from '../navbar/NoSessionBar';

import store from '../../redux/store';
import { location, port } from '../../../../config';
import styles from './topCss';
import { Form, loginInfo, options } from './tcombFormCss';

const Signup = (props) => {  //changed { history } to props, affects line 36 
  const submitHandler = () => {
    const value = this._form.getValue();
    const { username, password } = value;
    axios
      .post(`https://${location}:${port}/api/auth/signup`, { username, password })
      .then(({ data }) => {
        const { username } = data;
        store.dispatch({
          type: 'sessionlogin',
          body: {
            username,
          },
        });
        props.navigation.navigate('Home');
      })
      .catch(() => alert('failed to sign in'));
  };

  return (
    <View style={styles.main}>
      <NoSessionBar nav={props} />
      <View style={styles.form}>
        <Form type={loginInfo} ref={c => this._form = c} options={options} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.innerContainer} onPress={submitHandler}>
            <Text style={styles.text}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;