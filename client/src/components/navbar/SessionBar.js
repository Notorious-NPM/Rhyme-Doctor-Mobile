import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import axios from 'axios';

import { location, port } from '../../../../config';
import store from '../../redux/store';
import styles from './navbarCss';

const logout = async (nav) => {
  const result = await axios.post(`https://${location}:${port}/api/auth/logout`);
  store.dispatch({ type: 'sessionlogout' });
  store.dispatch({ type: 'wipestore' });
  nav.navigation.navigate('Home');
  alert('You are now logged out');
};

const renderTouchable = () => <TouchableOpacity/>;

const SessionBar = ({ nav }) => (
  <View style={{ height: 60, paddingTop: 30, paddingBottom: 10, paddingRight: 10, paddingLeft: 10, flexDirection: 'row', backgroundColor: '#ffff64' }}>
    <View style={{ flex: 1 }}><Text style={{ fontSize: 18 }}>Rhyme Doctor</Text></View>
    <Menu >
      <MenuTrigger renderTouchable={renderTouchable}>
        <Text style={{ fontSize: 18 }}>Menu</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1}>
          <Text style={styles.menuText} onPress={() => nav.navigation.navigate('RapPost', { subscription: 1 })}>Home</Text>
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
          <Text style={styles.menuText} onPress={() => nav.navigation.navigate('Friends')}>Friends</Text>
        </MenuOption>
        <View style={styles.bottomRule} />
        <MenuOption value={5}>
          <Text style={styles.menuText} onPress={() => nav.navigation.navigate('About')}>About</Text>
        </MenuOption>
        <View style={styles.bottomRule} />
        <MenuOption value={6}>
          <Text style={styles.menuText} onPress={() => nav.navigation.navigate('EditProfile')}>Edit Profile</Text>
        </MenuOption>
        <View style={styles.bottomRule} />
        <MenuOption value={7}>
          <Text style={styles.menuText} onPress={() => logout(nav)}>Logout</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

export default SessionBar;
