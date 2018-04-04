import React from 'react';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './navbarCss';

const renderTouchable = () =>  <TouchableOpacity/>;

const NoSessionBar = ({ nav }) => {

  const navigate = (value) => {
    nav.navigation.navigate(value);
  }

  const pic = { uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/345384-200.png' };
  return (
    <View style={styles.main}>
      <View style={{ flex: 1}}><Text style={styles.title}>Rhyme Doctor</Text></View>
      <Menu onSelect={(value) => navigate(value)}>
        <MenuTrigger renderTouchable={renderTouchable}>
          <Text><Image style={styles.menuIcon} source={pic}/></Text>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption value={'Login'} renderTouchable={renderTouchable}>
            <Text style={styles.menuText} >Login</Text>
          </MenuOption>
          <View style={styles.bottomRule} />
          <MenuOption value={'Signup'} renderTouchable={renderTouchable}>
            <Text style={styles.menuText} >Signup</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}

export default NoSessionBar;

