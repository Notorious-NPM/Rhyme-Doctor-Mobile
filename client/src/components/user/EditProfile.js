import React from 'react';
import axios from 'axios';
import Expo from 'expo';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableHighlight, CameraRoll, PermissionsAndroid, Alert } from 'react-native';
import SessionBar from '../navbar/SessionBar';
import ViewPhotos from './ViewPhotos';
// import Stats from './Stats';
// import ProfileImage from './ProfileImage';
// import Bio from './Bio';
// import FriendButton from '../buttons/FriendButton';

import { location, port } from '../../../../config'

// import store from '../../redux/store';

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      image: '',
      bio: '',
      received: false,
    };
  }

  componentDidMount() {
    // if (this.props.location.state) {
    //   const { username } = this.props.location.state;
    //   this.getUserData(username);
    //   this.getUserPosts(username);
    // } else {
      this.getUserData();
  }

  // componentDidMount() {
  //   this.setState(store.getState());  // eslint-disable-line
  //   store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  requestPermission = async () => {
    // Permissions.request('photo').then(response => {
    //   this.setState({photoPermission: response})
    //   console.log('state', this.state);
    // })
    // async function getLocationAsync() {
      const { Location, Permissions } = Expo;
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === 'granted') {
        return CameraRoll.getPhotos({ first: 10, assetType: 'Photos' })
        .then(res => {
          this.setState({
            photos: res.edges
          })

        })
      } else {
        throw new Error('Location permission not granted');//change this
      }
  }
  
  getUserData = async (username) => {
    try {
      const userData = username ? await axios.get(`https://${location}:${port}/api/profile`, { params: { name: username } }) : await axios.get(`http://${location}:3421/api/profile`);
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

  // getPhotosFromGallery() {
  //   CameraRoll.getPhotos({ first: 100, assetType: 'Photos' })
  //     .then(res => {
  //       console.log(res, "images data")
  //     })
  // }

  render() {
    // const { state } = this.props.location;
    return (
        <View style={styles.container}>
          <SessionBar nav={this.props}/>
          <View style={styles.innerContainer}>
            {/* <View style={styles.topContainer}> */}
            <View style={styles.stats}>
              <Text style={{color:'white', fontSize:25, fontWeight: 'bold', alignSelf: 'center'}}>{this.state.username}</Text>
            </View>
              <View style={styles.image}>
                <Image source={this.state.image} style={{height: 150, width: 150, alignSelf: 'center', marginTop: 15}}/>
                <View style={styles.button}>
                  <TouchableHighlight 
                    style={styles.touchable}
                    onPress={() => this.requestPermission()}>
                    <Text style={{color: '#D7D7D7', fontWeight: 'bold'}}>CHANGE PICTURE</Text>
                      {/* // onPress={onPressLearnMore}
                      // onPress={() => alert('add function here')} */}
                  </TouchableHighlight>
                </View>
                <View>
                  {this.state.photos && <ViewPhotos photos={this.state.photos}/>}
                </View>
              </View>
              
            {/* </View> */}

              {/* <View style={styles.bio}>
                <Text style={{color:'white', fontSize:20, fontWeight: 'bold', marginLeft: 65}}>{this.state.username}</Text>
                <Text style={{color:'white', fontSize:16, fontWeight: 'bold', marginLeft: 85}}>Likes: {this.state.likeCount}</Text>
              </View>
            <View style={{marginTop: 10}}>
              <Text style={{color:'white', fontSize:14, marginLeft: 10}}>{this.state.bio}</Text>
            </View>
            <View
              style={{
                borderBottomColor: '#686868',
                borderBottomWidth: 1,
                marginTop: 15
              }}
            /> */}
          </View>
          <Text> Edit Are goes here</Text>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    margin: 10,
    width: 150,
    height: 30,
    alignSelf: 'center',
    borderColor: '#D7D7D7',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    margin: 20
  },
  bio: {
    flex: 1,
    marginTop: 5,
    // flexDirection: 'column',
    alignSelf: 'center'
  }
  // topContainer: {
  //   flexDirection: 'row'
  // }
});