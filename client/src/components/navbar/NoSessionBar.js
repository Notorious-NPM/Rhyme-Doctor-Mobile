/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
// import { Link } from 'react-router-dom';
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';
import { StyleSheet, Text, View, Platform } from 'react-native';

const NoSessionBar = ({ nav }) => (
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
          <Text onPress={() => nav.navigation.navigate('Login')}>Login</Text>
        </MenuOption>
        <MenuOption value={3}>
          <Text onPress={() => nav.navigation.navigate('Signup')}>Signup</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

export default NoSessionBar;
