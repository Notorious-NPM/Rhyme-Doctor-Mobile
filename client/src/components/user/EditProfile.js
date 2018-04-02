import React from 'react';
import axios from 'axios';
import Expo from 'expo';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableHighlight, CameraRoll, PermissionsAndroid, Alert } from 'react-native';
import SessionBar from '../navbar/SessionBar';
import Permissions from 'react-native-permissions';
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
      userPosts: [],
      username: '',
      likeCount: '',
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
      Permissions.checkMultiple(['camera', 'photo', 'storage']).then(response => {
        this.setState({ 
          photoPermission: response.photo,
          cameraPermission: response.camera,
          storagePermissions: response.storage
        })
      }).catch(err => {console.log(err)})
  }

  // componentDidMount() {
  //   this.setState(store.getState());  // eslint-disable-line
  //   store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  requestPermission = async() => {
    // Permissions.request('photo').then(response => {
    //   this.setState({photoPermission: response})
    //   console.log('state', this.state);
    // })
    // async function getLocationAsync() {
      const { Location, Permissions } = Expo;
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === 'granted') {
        return CameraRoll.getPhotos({ first: 100, assetType: 'Photos' })
        .then(res => {
          console.log(res, "images data")
        })
      } else {
        throw new Error('Location permission not granted');
      }
    // }
  }


  alertForPhotosPermission() {
    Alert.alert(
      'Can we access your photos?',
      'We need access so you can set your profile pic',
      [
        {
          text: 'No way',
          onPress: () => console.log('Permission denied'),
          style: 'cancel',
        },
        this.state.photoPermission === 'undetermined'
          ? { text: 'OK', onPress: this.requestPermission()}
          : { text: 'Open Settings', onPress: Permissions.openSettings}
      ]
    )
  }

  getUserData = async (username) => {
    try {
      const userData = username ? await axios.get(`https://${location}:3421/api/profile`, { params: { name: username } }) : await axios.get(`http://${location}:3421/api/profile`);
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

  requestExternalStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'My App Storage Permission',
          message: 'My App needs access to your storage ' +
            'so you can save your photos',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera")
      } else {
        console.log("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  };

  getPhotosFromGallery() {
    CameraRoll.getPhotos({ first: 100, assetType: 'Photos' })
      .then(res => {
        console.log(res, "images data")
      })
  }

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
                <View style={styles.button}>
                  <TouchableHighlight 
                    style={styles.touchable}
                    onPress={() => this.getPhotosFromGallery()}>
                    <Text style={{color: '#D7D7D7', fontWeight: 'bold'}}>CHANGE PICTURE</Text>
                      {/* // onPress={onPressLearnMore}
                      // onPress={() => alert('add function here')} */}
                  </TouchableHighlight>
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