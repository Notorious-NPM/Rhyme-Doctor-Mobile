import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import SessionBar from '../navbar/SessionBar';
import UserPosts from './UserPosts';
// import UserPosts from './UserPosts';
// import Stats from './Stats';
// import ProfileImage from './ProfileImage';
// import Bio from './Bio';
// import FriendButton from '../buttons/FriendButton';

import location from '../../../../config'

// import store from '../../redux/store';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPosts: [],
      username: '',
      likeCount: '',
      image: '',
      bio: '',
      received: false,
    };
  }

  componentDidMount() {
    if (this.props.navigation.state.params) {
      const { username } = this.props.navigation.state.params;
      this.getUserData(username);
      this.getUserPosts(username);
    } else {
      this.getUserData();
      this.getUserPosts();
    }
  }

  // componentDidMount() {
  //   this.setState(store.getState());  // eslint-disable-line
  //   store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  getUserData = async (username) => {
    try {
      const userData = username ? await axios.get(`http://${location}:3421/api/profile`, { params: { name: username } }) : await axios.get(`http://${location}:3421/api/profile`);
      this.setState({
        username: userData.data.name,
        likeCount: userData.data.like_count,
        image: {uri: userData.data.image},
        bio: userData.data.bio,
        received: true
      });
    } catch (err) {
      console.log('Failed to get user posts');
    }
  }

  getUserPosts = async (username) => {
    try {
      const userPosts = username ? await axios.get(`http://${location}:3421/api/profile/posts`, { params: { name: username } }) : await axios.get(`http://${location}:3421/api/profile/posts`);
      this.setState({
        userPosts: userPosts.data,
      });
    } catch (err) {
      console.log('Failed to get user posts');
    }
  }

  render() {
    // const { state } = this.props.location;
    return (
        <View style={styles.container}>
          <SessionBar nav={this.props}/>
          <View style={styles.innerContainer}>
            <View style={styles.topContainer}>
              <View style={styles.image}>
                <Image source={this.state.image} style={{height: 100, width: 100}}/>
              </View>
              <View style={styles.bio}>
                <Text style={{color:'white', fontSize:20, fontWeight: 'bold', marginLeft: 65}}>{this.state.username}</Text>
                <Text style={{color:'white', fontSize:16, fontWeight: 'bold', marginLeft: 85}}>Likes: {this.state.likeCount}</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              {/* <Text style={{color:'white', fontSize:14, fontWeight: 'bold', marginLeft: 10}}>About Me</Text> */}
              <Text style={{color:'white', fontSize:14, marginLeft: 10}}>{this.state.bio}</Text>
              {/* <Text>{this.state.userPosts.length}</Text> */}
            </View>
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


var styles = StyleSheet.create({
  button: {
    margin: 10,
    borderColor: '#D7D7D7',
    borderWidth: 1
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#333',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  innerContainer : {
    margin: 10
  },
  image: {
    flexDirection: 'column'
  },
  bio: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'column',
    alignSelf: 'center'
  },
  topContainer: {
    flexDirection: 'row'
  }
});