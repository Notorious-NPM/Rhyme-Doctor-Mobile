import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { registerRootComponent } from 'expo';
import { StackNavigator } from 'react-navigation';
import { MenuContext }  from 'react-native-menu';

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
        <MenuContext>
          <RootStack />
        </MenuContext>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  }
});

registerRootComponent(App);
AppRegistry.registerComponent('SessionBar', () => App);