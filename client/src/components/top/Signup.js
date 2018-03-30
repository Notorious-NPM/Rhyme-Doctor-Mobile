/* Much DRY violations... */

import React from 'react';
import $ from 'jquery';

// import store from '../../redux/store';
import { Platform, StyleSheet, Text, View } from 'react-native';
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
  const submitHandler = (e) => {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/auth/signup',
      data: {
        username: $('#username').val(),
        password: $('#password').val(),
      },
      success(response) {
        const { username } = JSON.parse(response);
        store.dispatch({
          type: 'sessionlogin',
          body: {
            username,
          },
        });
        props.history.push('/');
      },
      error({ responseText }) {
        alert(responseText); // eslint-disable-line
      },
    });
  };
  return (
    <View style={styles.main}>
      <NoSessionBar nav={props} />
      <View style={styles.form}>
        <Form type={loginInfo} options={options} />
      </View>
    </View>
    // <div className="container-fluid filler">
    //   <div className="row center-block mx-auto">
    //     <div
    //       className="col-md-2 text-center"
    //       style={{
    //         float: 'none',
    //         margin: '0 auto',
    //       }}
    //     >
    //       <form className="form-group" action="/api/auth/login" method="POST">
    //         <label htmlFor="username">Username:{' '}
    //           <input className="form-control-sm" id="username" type="text" name="username" placeholder="Username" />
    //         </label>
    //         <label htmlFor="password">Password:{' '}
    //           <input className="form-control-sm" id="password" type="password" name="password" placeholder="Password" />
    //         </label>
    //         <input onClick={submitHandler} type="button" value="Submit" className="btn btn-outline-primary btn-sm" />
    //       </form>
    //     </div>
    //   </div>
    // </div>
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