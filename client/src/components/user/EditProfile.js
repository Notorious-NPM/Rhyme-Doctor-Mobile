import React from 'react';
import axios from 'axios';
import Expo, { ImagePicker } from 'expo';
import { Text, View, Image, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import SessionBar from '../navbar/SessionBar';
import EditBio from './EditBio';

import styles from './EditProfileCss';

import { location, port } from '../../../../config';

import store from '../../redux/store';

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      image: null,
      bio: '',
      editBio: false
    };
  }

  componentDidMount() {
      this.getUserData();
  }

  uploadImageToCloud(image) {
    let apiUrl = 'https://api.cloudinary.com/v1_1/dkwbeount/image/upload';

    let xhr = new XMLHttpRequest();
    var fd = new FormData();

    
    fd.append('upload_preset', 'hkhkmnpg');
    fd.append('file', `data:image/png;base64,${image}`);

    axios.post(apiUrl, fd,{ headers: {'X-Requested-With': 'XMLHttpRequest' },
    }).then(res => {
      const {data} = res;
      const fileUrl = data.secure_url;
      this.setState({
        image: fileUrl
      });
      axios.put(`https://${location}:${port}/api/profile/image`, { image: fileUrl })
        .then(res2 => {
          console.log('Pic changed');
        })
        .catch(err => Alert.alert('Error changing profile picture'));
    });
  }

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true
    })
    if (result.base64) {
      this.uploadImageToCloud(result.base64);
    }
  }

  takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      base64: true
    });
    if (result.base64) {
      this.uploadImageToCloud(result.base64);
    }
  }

  showEdit() {
    this.setState({
      editBio: !this.state.editBio
    })
  }

  addBio(input) {
    this.setState({
      bio: input,
      editBio: !this.state.editBio
    })
    
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

  render() {
    return (
        <View style={styles.container}>
          <SessionBar nav={this.props}/>
          <View style={styles.innerContainer}>
            <View style={styles.stats}>
              <Text style={{color:'white', fontSize:25, fontWeight: 'bold', alignSelf: 'center'}}>{this.state.username}</Text>
            </View>
            <View style={styles.image}>
              { this.state.image && <Image source={{uri: this.state.image}} style={{height: 150, width: 150, alignSelf: 'center', marginTop: 15}}/>}
              <View style={styles.button}>
                <TouchableHighlight 
                  style={styles.touchable}
                  onPress={() => 
                    Alert.alert(
                      'Change Profile Pic',
                      'Choose One Below',
                      [
                        {text: 'Camera Roll', onPress: () => this.pickImage()},
                        {text: 'Take Photo', onPress: () => this.takePhoto()}
                      ],
                      { cancelable: true }
                    )
                  }>
                  <Text style={{color: '#D7D7D7', fontWeight: 'bold'}}>CHANGE PICTURE</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{marginTop: 20, width: 300}}>
              <View
                style={{
                  borderBottomColor: '#686868',
                  borderBottomWidth: 2,
                  marginTop: 15,
                }}
              />
              <Text style={{color:'#D7D7D7', fontSize:14, textAlign: 'center', marginTop: 15}}>{this.state.bio}</Text>
            </View>
            <View style={styles.button}>
              <TouchableHighlight 
                style={styles.touchable}
                onPress={() => this.showEdit()}>
                <Text style={{color: '#D7D7D7', fontWeight: 'bold'}}>EDIT BIO</Text>
              </TouchableHighlight>
            </View>
            <View>
              {this.state.editBio && <EditBio addBio={(input) => this.addBio(input)} showEdit={() => this.showEdit()}/>}
            </View>
          </View>
      </View>
    );
  }
}