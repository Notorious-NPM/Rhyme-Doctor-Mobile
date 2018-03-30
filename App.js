import React from 'react';
import { AppRegistry } from 'react-native';
import { registerRootComponent } from 'expo';
import { MenuContext }  from 'react-native-menu';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './client/src/components/home/index';
import FriendChat from './client/src/components/buttons/FriendChat';
import RapPost from './client/src/components/rap-post/RapPost';

const RootStack = StackNavigator(
  {
    Home: {
      name: 'Home',
      screen: Home,
    },
    Friends: {
      screen: FriendChat,
    },
    RapPost: {
      screen: RapPost,
    }
  },
  {
    // headerMode: 'none',
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export default class App extends React.Component {
  render() {
    return (
      <MenuContext style={{ flex: 1 }}>
        <RootStack />
      </MenuContext>
    );
  }
}

registerRootComponent(App);
AppRegistry.registerComponent('SessionBar', () => App);
