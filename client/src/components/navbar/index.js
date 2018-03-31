import React from 'react';

import NoSessionBar from './NoSessionBar';
import SessionBar from './SessionBar';

import store from '../../redux/store';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return this.state.session ? <SessionBar nav={this.props.nav} /> : <NoSessionBar nav={this.props.nav} />;
  }
}

export default Navbar;
