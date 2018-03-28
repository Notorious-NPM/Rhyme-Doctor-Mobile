import React from 'react';
import $ from 'jquery';

import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

import {MenuContext}  from 'react-native-menu';
import SessionBar from '../navbar/SessionBar';

// import Textarea from '../textarea/Textarea';
// import Paragraph from '../text/Paragraph';
// import FriendChat from '../../components/buttons/FriendChat';
// import RhymeForm from '../rhymeSearch/RhymeForm';
// import ColorPicker from '../toolbar/ColorPicker';
// import store from '../../redux/store';

import location from '../../../../config';
// import './home.css';

// const centerStyle = {
//   float: 'none',
//   margin: '0 auto',
// };

const clickHandler = () => {
  $.ajax({
    method: 'POST',
    url: '/api/content/post',
    data: {
      text: $('#lyrics').val(),
    },
    success(res) {
      console.log(res);
    },
    error(res) {
      alert(res); // eslint-disable-line
    },
  });
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    let pic = {
      uri: 'https://i.imgur.com/vWA2TAB.jpg'
    };
    return (
      <View style={styles.container}>
        <MenuContext>
          <SessionBar nav={this.props}/>
          <View style={styles.image}>
            <Image source={pic} style={{alignSelf: 'stretch', height: 200}}/>
          </View>
        <Text style={{color:'white', textAlign:'center', paddingTop: 10, paddingBottom: 10}}>Compose as you normally would. But be aware: commas signify a word to be rhymed with, as does the end of a line.</Text>
        <TextInput
          style={{height: 150, width: 300, alignSelf: 'center', backgroundColor: '#D7D7D7', borderColor: 'gray', borderWidth: 1}}
          placeholder="Type here..."
          placeholderTextColor="#333"
        // onChangeText={(text) => this.setState({text})}
        // value={this.state.text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              // onPress={onPressLearnMore}
              title="Post"
              color="#333"
              // accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.button}>
            <Button
              // onPress={onPressLearnMore}
              title="Hit API"
              color="#333"
              // accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
        </MenuContext>
      </View>
    )
  }
}

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = store.getState();
//     store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentDidMount() {
//     this.state = store.getState();
//     console.log(this.state);
//     store.dispatch({
//       type: 'browserrestore',
//       body: {
//         username: this.state.user ? this.state.user : 'anonymous',
//       },
//     });
//     store.subscribe(() => {
//       this.setState(store.getState());
//       // console.log(this.state);
//     });
//   }

//   hitHandler = () => {
//     const strictness = this.state.strictness === 'Strict' ? 3 : 1; // Other possible value is 'loose'.
//     $.ajax({
//       method: 'POST',
//       url: `http://${location}:3001/parse`,
//       data: {
//         text: $('#lyrics').val(),
//         strictness,
//       },
//       success(res) {
//         const colors = JSON.parse(res);
//         const coords = Object.keys(colors);
//         store.dispatch({ type: 'wipeboard' });
//         coords.forEach((coord) => {
//           store.dispatch({
//             type: 'straighthighlight',
//             body: {
//               coord,
//               color: colors[coord],
//             },
//           });
//         });
//       },
//       error(res) {
//         alert(res); // eslint-disable-line
//       },
//     });
//   };

//   strictHandler = () => {
//     if (this.state.strictness === 'Strict') {
//       store.dispatch({
//         type: 'changestrictness',
//         body: {
//           strictness: 'Loose',
//         },
//       });
//     } else if (this.state.strictness === 'Loose') {
//       store.dispatch({
//         type: 'changestrictness',
//         body: {
//           strictness: 'Strict',
//         },
//       });
//     }
//   };

//   render() {
//     return (
//       // <div>
//       //   <div className="jumbotron" />
//       //   <div className="container-fluid">
//       //     <div className="row">
//       //       <div className="col text-center" style={centerStyle} />
//       //     </div>
//       //   </div>
//       //   <div className="row">
//       //     <Textarea />
//       //     <Paragraph className="text-center" style={centerStyle} text={this.state.text} />
//       //   </div>
//       //   <div className="row">
//       //     <div className="col-md-6" style={{ margin: '5px' }}>
//       //       {this.state.session ?
//       //        'Compose as you normally would. But be aware: commas signify a word to be rhymed with, as does the end of a line.' /* eslint-disable-line */
//       //        : 'Perhaps you\'d like to sign up...'}
//       //     </div>
//       //   </div>
//       //   {this.state.session &&
//       //   <div className="row">
//       //     <div className="col-md-4">
//       //       <button style={{ margin: '5px' }} className="btn btn-outline-primary" onClick={clickHandler}>Post</button>
//       //       <button style={{ margin: '5px' }} className="btn btn-outline-primary" onClick={this.hitHandler}>Hit API</button>
//       //       <button style={{ margin: '5px' }} className="btn btn-outline-primary" onClick={this.strictHandler}>{this.state.strictness}</button>
//       //     </div>
//       //     <div className="col-md-2">
//       //       <span />
//       //     </div>
//       //     <div className="col-md-4">
//       //       {'Color Pad: '}<ColorPicker />
//       //     </div>
//       //   </div>}
//       //   {this.state.session && <FriendChat />}
//       //   <hr />
//       //   {this.state.session && <RhymeForm />}
//       // </div>
//     );
//   }
// }

// export default Home;



var styles = StyleSheet.create({
  button: {
    margin: 10,
    borderColor: '#D7D7D7',
    borderWidth: 1
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#333',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});