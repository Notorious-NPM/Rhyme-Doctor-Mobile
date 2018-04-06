import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import SessionBar from '../navbar/SessionBar';
import UserPosts from './UserPosts';
import FriendButton from '../buttons/FriendButton';
import styles from './ProfileCss';
import { location, port } from '../../../../config';
import store from '../../redux/store';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPosts: [],
      username: '',
      likeCount: '',
      image: null,
      bio: '',
      received: false,
    };
  }

  componentWillMount() {
    if (this.props.navigation.state.params) {
      const { username } = this.props.navigation.state.params;
      this.getUserData(username);
      this.getUserPosts(username);
    } else {
      this.getUserData();
      this.getUserPosts();
    }
    if (this.props.navigation.state.params && this.props.navigation.state.params.username) {
      this.setState({
        username: this.props.navigation.state.params.username,
      });
    }
  }

  componentDidMount() {
    this.setState(store.getState());  // eslint-disable-line
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }


  getUserData = async (username) => {
    try {
      const userData = username ? await axios.get(`https://${location}:${port}/api/profile`, { params: { name: username } }) : await axios.get(`http://${location}:3421/api/profile`);
      this.setState({
        username: userData.data.name,
        likeCount: userData.data.like_count,
        image: userData.data.image,
        bio: userData.data.bio,
        received: true
      });
    } catch (err) {
      console.log('Failed to get user posts');
    }
  }

  getUserPosts = async (username) => {
    try {
      const userPosts = username ? await axios.get(`https://${location}:${port}/api/profile/posts`, { params: { name: username } }) : await axios.get(`http://${location}:3421/api/profile/posts`);
      this.setState({
        userPosts: userPosts.data,
      });
    } catch (err) {
      console.log('Failed to get user posts');
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <SessionBar nav={this.props}/>
          <View style={styles.innerContainer}>
            <View style={styles.topContainer}>
              <View style={styles.image}>
                {this.state.image && <Image source={{ uri: this.state.image }} style={{height: 100, width: 100}}/>}
              </View>
              <View style={styles.bio}>
                <Text style={{color:'white', fontSize:20, fontWeight: 'bold', marginLeft: 65}}>{this.state.username}</Text>
                <Text style={{color:'white', fontSize:16, fontWeight: 'bold', marginLeft: 65}}>Likes: {this.state.likeCount}</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color:'white', fontSize:14, marginLeft: 10, textAlign: 'center'}}>{this.state.bio}</Text>
            </View>
              {(this.state.received && this.state.username !== this.state.user && <FriendButton username={this.state.username} />)}
            <View
              style={{
                borderBottomColor: '#686868',
                borderBottomWidth: 1,
                marginTop: 15
              }}
            />
          </View>
          <UserPosts userPosts={this.state.userPosts}/>
        </View>
    );
  }
}

