import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';
// import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import $ from 'jquery';

// import store from '../../redux/store';

// const history = createHistory();

// const logout = () => {
//   $.ajax({
//     url: '/api/auth/logout',
//     method: 'POST',
//     success() {
//       store.dispatch({ type: 'sessionlogout' });
//       store.dispatch({ type: 'wipestore' });
//       history.push('/');
//     },
//   });
// };

const SessionBar = ({ nav }) => (
  <View style={{ height: 60, paddingTop: 30, paddingBottom: 10, paddingRight: 10, paddingLeft: 10, flexDirection: 'row', backgroundColor: '#ffff64' }}>
    <View style={{ flex: 1}}><Text style={{ fontSize: 18 }}>Rhyme Doctor</Text></View>
    <Menu >
      <MenuTrigger>
        <Text style={{ fontSize: 18 }}>Menu</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1}>
        <Text onPress={() => nav.navigation.navigate('Home')}>Home</Text>
        </MenuOption>
        <MenuOption value={2}>
          <Text>Top/News Feed</Text>
        </MenuOption>
        <MenuOption value={3}>
          <Text>Profile</Text>
        </MenuOption>
        <MenuOption value={4}>
          <Text>Subscriptions</Text>
        </MenuOption>
        <MenuOption value={5}>
          <Text onPress={() => nav.navigation.navigate('Friends')}>Friends</Text>
        </MenuOption>
        <MenuOption value={6}>
          <Text>About</Text>
        </MenuOption>
        <MenuOption value={7}>
          <Text>Logout</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

var styles = StyleSheet.create({
  toolbar:{
    backgroundColor:'#ffff64',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'
  },
  toolbarButton:{
      width: 50,
      color:'#333',
      textAlign:'center'
  },
  toolbarTitle:{
      color:'#333',
      textAlign:'center',
      fontWeight:'bold',
      flex:1
  }
})

export default SessionBar;
