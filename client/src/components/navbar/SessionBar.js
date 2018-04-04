import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import axios from 'axios';

import { location, port } from '../../../../config';
import store from '../../redux/store';
import styles from './navbarCss';

const renderTouchable = () => <TouchableOpacity/>;

class SessionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneVertical: true,
    }
  }

  layoutChange = () => {
    const { width, height } = Dimensions.get('window');
    let { phoneVertical } = this.state;
    width > 400 ? phoneVertical = false : phoneVertical = true;
    this.setState({ phoneVertical });
  }

  logout = async (nav) => {
    const result = await axios.post(`https://${location}:${port}/api/auth/logout`);
    store.dispatch({ type: 'sessionlogout' });
    store.dispatch({ type: 'wipestore' });
    nav.navigation.navigate('Login');
  };

  navigate = (value) => {
    const { nav } = this.props;
    value === 'Home' ? nav.navigation.navigate('RapPost', { subscription: 1 }) : value === 'Logout' ? this.logout(nav) : nav.navigation.navigate(value);
  }

  render() {
    const pic = { uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/345384-200.png' };
    let { phoneVertical } = this.state;

    return (
      <View onLayout={this.layoutChange}>
        {phoneVertical && <View style={styles.top}/>}
        <View style={styles.main}>
          <View style={{ flex: 1 }}><Text style={styles.title}>Rhyme Doctor</Text></View>
          <Menu onSelect={(value) => this.navigate(value)}>
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
      </View>
    );
  }
}

export default SessionBar;
