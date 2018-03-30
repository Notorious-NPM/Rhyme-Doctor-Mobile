/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';

const NoSessionBar = () => (
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
  // <div>
  //   <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark" >
  //     <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
  //       <ul className="navbar-nav mr-auto">
  //         <li className="nav-item active">
  //           <Link className="nav-link" to="/">Home</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/login">Login</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/signup">Sign Up</Link>
  //         </li>
  //       </ul>
  //     </div>
  //     <div className="mx-auto order-0">
  //       <a className="navbar-brand mx-auto" href="#">℞hyme Doctor</a>
  //       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
  //         <span className="navbar-toggler-icon" />
  //       </button>
  //     </div>
  //   </nav>
  // </div>
);

export default NoSessionBar;
