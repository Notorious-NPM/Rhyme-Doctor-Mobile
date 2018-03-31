/* Much DRY violations... */

import React from 'react';
import axios from 'axios';

import store from '../../redux/store';
import location from '../../../../config';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import t from 'tcomb-form-native';
import NoSessionBar from '../navbar/NoSessionBar';

const Form = t.form.Form;

const loginInfo = t.struct({
  username: t.String,
  password: t.String,
})

var tcomb = require('tcomb-form-native');

// overriding the text color for every textbox in every form of your app
tcomb.form.Form.stylesheet.textbox.normal.backgroundColor = 'white';

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: 'white',
      fontSize: 20,
      fontWeight: '700'
    }
  },
  fields: {
    username: {
      color: 'white'
    }
  }
}

const options = {
  stylesheet: formStyles,
}

const Signup = (props) => {  //changed { history } to props, affects line 36 
  const submitHandler = () => {
    const value = this._form.getValue();
    const { username, password } = value;
    axios
      .post(`http://${location}:3421/api/auth/signup`, { username, password })
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
        <Button
          title="signup"
          onPress={submitHandler}
          />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      form: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
      },
    },
    android: {
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      form: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
      },
    }
  })
})