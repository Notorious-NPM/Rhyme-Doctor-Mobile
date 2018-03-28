import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
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

const SessionBar = () => (
  <View style={styles.toolbar}>
    <Text style={styles.toolbarButton}>Sign Up</Text>
    <Text style={styles.toolbarTitle}>Rhyme Doctor</Text>
    <Text style={styles.toolbarButton}>Login</Text>
  </View>
  // <div>
  //   <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark">
  //     <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
  //       <ul className="navbar-nav mr-auto">
  //         <li className="nav-item active">
  //           <Link className="nav-link" to="/">Home</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/feed">Top/News Feed</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/profile">Profile</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/subscriptions">Subscriptions</Link>
  //         </li>
  //       </ul>
  //     </div>
  //     <div className="mx-auto order-0">
  //       <a className="navbar-brand mx-auto" href="#">Rhyme Doctor</a>
  //       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
  //         <span className="navbar-toggler-icon" />
  //       </button>
  //     </div>
  //     <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
  //       <ul className="navbar-nav ml-auto">
  //         <li className="nav-item">
  //           <Link className="nav-link" style={{ display: 'inline' }} to="/about">About</Link>
  //           <a onClick={logout} style={{ display: 'inline' }} className="nav-link" /* eslint-disable-line */ >Logout</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // </div>
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
