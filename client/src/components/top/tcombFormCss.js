import t from 'tcomb-form-native';

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
  fields: {
    password: {
      password: true,
      secureTextEntry: true,
    }
  }
}

export { Form, loginInfo, options };