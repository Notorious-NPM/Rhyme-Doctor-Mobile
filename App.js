import React from 'react';
import { AppRegistry } from 'react-native';
import { registerRootComponent } from 'expo';
import { MenuContext }  from 'react-native-menu';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './client/src/components/home/index';
import FriendChat from './client/src/components/buttons/FriendChat';
import RapPost from './client/src/components/rap-post/RapPost';
import Profile from './client/src/components/user/Profile';
import Login from './client/src/components/top/Login';
import Signup from './client/src/components/top/Signup';

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
    },
    Profile: {
      screen: Profile,
    },
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
  },
  {
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
