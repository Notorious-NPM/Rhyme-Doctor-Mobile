import React from 'react';
import axios from 'axios';
import Expo, { ImagePicker } from 'expo';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableHighlight, CameraRoll, PermissionsAndroid, Alert } from 'react-native';
import SessionBar from '../navbar/SessionBar';
import ViewPhotos from './ViewPhotos';
// import Stats from './Stats';
// import ProfileImage from './ProfileImage';
// import Bio from './Bio';
// import FriendButton from '../buttons/FriendButton';

import { location, port } from '../../../../config'

import store from '../../redux/store';

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      image: '',
      bio: '',
      modalVisible: false,
    };
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
      this.getUserData();
  }

  hideModal() {
    this.setState({
      modalVisible: false
    })
  }

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true
    })

    let apiUrl = 'https://api.cloudinary.com/v1_1/dkwbeount/image/upload';

    let xhr = new XMLHttpRequest();
    var fd = new FormData();

    
    fd.append('upload_preset', 'hkhkmnpg');
    fd.append('file', `data:image/png;base64,${result.base64}`);

    axios.post(apiUrl, fd,{ headers: {'X-Requested-With': 'XMLHttpRequest' },
    }).then(res => {
      const {data} = res;
      const fileUrl = data.secure_url;
      this.setState({
        image: {uri: fileUrl}
      });
      axios.put(`https://${location}:${port}/api/profile/image`, { image: fileUrl })
        .then(res2 => {
          console.log('Pic changed');
        })
        .catch(err => Alert.alert('Error changing profile picture'));
    });
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
                    // onPress={() => this.requestPermission()}>
                    onPress={() => this.pickImage()}>
                    <Text style={{color: '#D7D7D7', fontWeight: 'bold'}}>CHANGE PICTURE</Text>
                      {/* // onPress={onPressLearnMore}
                      // onPress={() => alert('add function here')} */}
                  </TouchableHighlight>
                </View>
                <View>
                  {this.state.modalVisible && <ViewPhotos modalVisible={this.state.modalVisible} hideModal={this.hideModal} photos={this.state.photos}/>}
                </View>
              </View>
              <View>
              <View
                style={{
                  borderBottomColor: '#686868',
                  borderBottomWidth: 2,
                  marginTop: 15
                }}
              />
                <View style={{marginTop: 20}}>
                  <Text style={{color:'#D7D7D7', fontSize:14}}>{this.state.bio}</Text>
                </View>
                </View>
              <View style={styles.button}>
                <TouchableHighlight 
                  style={styles.touchable}
                  // onPress={() => this.requestPermission()}>
                  onPress={() => this.pickImage()}>
                  <Text style={{color: '#D7D7D7', fontWeight: 'bold'}}>EDIT BIO</Text>
                    {/* // onPress={onPressLearnMore}
                    // onPress={() => alert('add function here')} */}
                </TouchableHighlight>
              </View>

              {/* <View style={styles.bio}>
                <Text style={{color:'white', fontSize:20, fontWeight: 'bold', marginLeft: 65}}>{this.state.username}</Text>
                <Text style={{color:'white', fontSize:16, fontWeight: 'bold', marginLeft: 85}}>Likes: {this.state.likeCount}</Text>
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
    marginTop: 15,
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
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
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