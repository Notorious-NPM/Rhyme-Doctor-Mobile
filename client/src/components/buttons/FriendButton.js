import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import axios from 'axios';
import { location, port } from '../../../../config';
import styles from './ButtonCss';

class FriendButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areFriends: false,
      received: false
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const options = {
      params: {
        username,
      },
    };

    axios
      .get(`https://${location}:${port}/api/user/checkFriendship`, options)
      .then(({ data }) =>
        this.setState({ 
          areFriends: JSON.parse(data),
          received: true
        }))
      .catch(err => console.log('Friend componentMount error: ', err));
  }

  handleFriendButton() {
    const { username } = this.props;
    const { areFriends } = this.state;
    let payload = {
      username,
    };

    const action = areFriends ? 'delete' : 'post';
    payload = action === 'delete' ? { data: payload } : payload;

    axios[action](`https://${location}:${port}/api/user/friend`, payload)
      .then(({ data }) => console.log('result of ', action, ' request is: ', data))
      .catch(err => console.log(action, ' request error: ', err));

    if (action === 'delete') {
      this.setState({ areFriends: false });
    }

    if (action === 'post') {
      this.setState({ areFriends: true });
    }
  }

  render() {
    const { areFriends } = this.state;
    const action = areFriends ? 'De-Friend' : 'Add Friend';
    if (this.state.received) {
      return (
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleFriendButton()}> 
          <Text style={{color: '#D7D7D7', fontWeight: 'bold'}}>{action}</Text>
        </TouchableHighlight>
      );
    }
    return null;
  }
}

export default FriendButton;
