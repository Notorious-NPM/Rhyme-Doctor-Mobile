import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { registerRootComponent } from 'expo';
import { StackNavigator } from 'react-navigation';

import Home from './client/src/components/home/index';
import FriendChat from './client/src/components/buttons/FriendChat';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Friends: {
      screen: FriendChat,
    },
  },
  {
    initialRouteName: 'Home',
  }
)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

{/* // // const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#98E1DB',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// }); */}

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

registerRootComponent(App);
AppRegistry.registerComponent('SessionBar', () => App);