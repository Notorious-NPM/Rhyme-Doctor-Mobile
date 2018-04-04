import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import axios from 'axios';

import { location, port } from '../../../../config';
import store from '../../redux/store';
import styles from './navbarCss';

const logout = async ({ nav }) => {
  const result = await axios.post(`https://${location}:${port}/api/auth/logout`);
  store.dispatch({ type: 'sessionlogout' });
  store.dispatch({ type: 'wipestore' });
  nav.navigation.navigate('Home');
  alert('You are now logged out');
};

const renderTouchable = () => <TouchableOpacity/>;

const pic = { uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/345384-200.png' };

const SessionBar = ({ nav }) => {

  const navigate = (value) => {
    value === 'Home' ? nav.navigation.navigate('RapPost', { subscription: 1 }) : value === 'Logout' ? logout(nav) : nav.navigation.navigate(value);
  }

  return (
    <View style={styles.main}>
      <View style={{ flex: 1 }}><Text style={styles.title}>Rhyme Doctor</Text></View>
      <Menu onSelect={(value) => navigate(value)}>
        <MenuTrigger renderTouchable={renderTouchable}>
          <Text><Image style={styles.menuIcon} source={pic}/></Text>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption value={'Home'}>
            <Text style={styles.menuText}>Home</Text>
          </MenuOption>
          <View style={styles.bottomRule} />
          <MenuOption value={'RapPost'}>
            <Text style={styles.menuText}>Top/News Feed</Text>
          </MenuOption>
          <View style={styles.bottomRule} />
          <MenuOption value={'Profile'}>
            <Text style={styles.menuText}>Profile</Text>
          </MenuOption>
          <View style={styles.bottomRule} />
          <MenuOption value={'Friends'}>
            <Text style={styles.menuText}>Friends</Text>
          </MenuOption>
          <View style={styles.bottomRule} />
          <MenuOption value={'About'}>
            <Text style={styles.menuText}>About</Text>
          </MenuOption>
          <View style={styles.bottomRule} />
          <MenuOption value={'EditProfile'}>
            <Text style={styles.menuText}>Edit Profile</Text>
          </MenuOption>
          <View style={styles.bottomRule} />
          <MenuOption value={'Logout'}>
            <Text style={styles.menuText}>Logout</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}

export default SessionBar;
