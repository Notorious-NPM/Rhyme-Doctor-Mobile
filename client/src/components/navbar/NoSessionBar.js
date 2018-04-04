import React from 'react';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './navbarCss';

const renderTouchable = () =>  <TouchableOpacity/>;

class NoSessionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneVertical: true
    }
  }

  layoutChange = () => {
    const { width, height } = Dimensions.get('window');
    let { phoneVertical } = this.state;
    width > 400 ? phoneVertical = false : phoneVertical = true;
    this.setState({ phoneVertical });
  }

  navigate = (value) => {
    this.props.nav.navigation.navigate(value);
  }

  render() {
    const pic = { uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/345384-200.png' };
    let { phoneVertical } = this.state;

    return (
      <View onLayout={this.layoutChange}>
        {phoneVertical && <View style={styles.top}/>}
        <View style={styles.main}>
          <View style={{ flex: 1}}><Text style={styles.title}>Rhyme Doctor</Text></View>
          <Menu onSelect={(value) => this.navigate(value)}>
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
      </View>
    );
  } 
}

export default NoSessionBar;