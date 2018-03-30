import React from 'react';
import $ from 'jquery';

// import store from '../../redux/store';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import t from 'tcomb-form-native';
import NoSessionBar from '../navbar/NoSessionBar';

const Form = t.form.Form;

const loginInfo = t.struct({
  username: t.String,
  password: t.String,
})

const Login = (props) => {   //changed { history } to props.  Affects line 34
  const submitHandler = (e) => {
    e.preventDefault();
    const [username, password] = [$('#username').val(), $('#password').val()];
    $.ajax({
      method: 'POST',
      url: '/api/auth/login',
      data: {
        username,
        password,
      },
      success() {
        store.dispatch({
          type: 'sessionlogin',
          body: {
            username,
          },
        });
        props.history.push('/');   //check if this works later
      },
      error({ responseText }) {
        alert(responseText); // eslint-disable-line
      },
    });
  };
  return (
    <View>
      <View>
        <NoSessionBar nav={props} />
        <Form type={loginInfo} />
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

export default Login;
