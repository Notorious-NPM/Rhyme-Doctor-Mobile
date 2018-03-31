import React from 'react';
import { Button, Platform, StyleSheet, View, Text } from 'react-native';
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';
// import { Link } from 'react-router-dom';
import createHistory from 'history/createMemoryHistory';
import axios from 'axios';
import location from '../../../../config';

import Home from '../home/index';

import store from '../../redux/store';

const history = createHistory();

const logout = async (nav) => {
  const result = await axios.post(`http://${location}:3421/api/auth/logout`);
  store.dispatch({ type: 'sessionlogout' });
  store.dispatch({ type: 'wipestore' });
  nav.navigation.navigate('Home');
  alert('You are now logged out');
};

const SessionBar = ({ nav }) => (
  <View style={{ height: 60, paddingTop: 30, paddingBottom: 10, paddingRight: 10, paddingLeft: 10, flexDirection: 'row', backgroundColor: '#ffff64' }}>
    <View style={{ flex: 1 }}><Text style={{ fontSize: 18 }}>Rhyme Doctor</Text></View>
    <Menu >
      <MenuTrigger>
        <Text style={{ fontSize: 18 }}>Menu</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1}>
          <Text style={styles.menuText} onPress={() => nav.navigation.navigate('Home')}>Home</Text>
        </MenuOption>
        <View style={styles.bottomRule} />
        <MenuOption value={2}>
          <Text style={styles.menuText} onPress={() => nav.navigation.navigate('RapPost')}>Top/News Feed</Text>
        </MenuOption>
        <View style={styles.bottomRule} />
        <MenuOption value={3}>
          <Text style={styles.menuText} onPress={() => nav.navigation.navigate('Profile')}>Profile</Text>
        </MenuOption>
        <View style={styles.bottomRule} />
        <MenuOption value={4}>
          <Text style={styles.menuText}>Subscriptions</Text>
        </MenuOption>
        <View style={styles.bottomRule} />
        <MenuOption value={5}>
          <Text style={styles.menuText} onPress={() => nav.navigation.navigate('Friends')}>Friends</Text>
        </MenuOption>
        <View style={styles.bottomRule} />
        <MenuOption value={6}>
          <Text style={styles.menuText}>About</Text>
        </MenuOption>
        <View style={styles.bottomRule} />
        <MenuOption value={7}>
          <Text style={styles.menuText} onPress={() => logout(nav)}>Logout</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

var styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      menuText: {
        fontSize: 20
      },
      bottomRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        marginLeft: '10%'
      }
    },
    android: {
      menuText: {
        fontSize: 20
      },
      bottomRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        marginLeft: '10%'
      }
    }
  })
})

export default SessionBar;
