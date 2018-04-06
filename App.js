import React from 'react';
import { AppRegistry } from 'react-native';
import { registerRootComponent } from 'expo';
import { MenuContext }  from 'react-native-menu';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import FriendChat from './client/src/components/friends/FriendChat';
import RapPost from './client/src/components/rap-post/RapPost';
import Profile from './client/src/components/user/Profile';
import Login from './client/src/components/top/Login';
import Signup from './client/src/components/top/Signup';
import About from './client/src/components/about/About';
import EditProfile from './client/src/components/user/EditProfile';
import Privacy from './client/src/components/privacy';

const RootStack = StackNavigator(
  {
    Login: {
      name: 'Login',
      screen: Login,
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
    Signup: {
      screen: Signup,
    },
    About: {
      screen: About,
    },
    Privacy: {
      screen: Privacy,
    },
    EditProfile: {
      screen: EditProfile,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    }
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
