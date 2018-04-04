import React, {Component} from 'react';
import axios from 'axios';

import { Image, View, ListView, StyleSheet, Text, TouchableHighlight, ScrollView, Modal, Alert } from 'react-native';

import API_KEY from './config';

export default class ViewPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: this.props.modalVisible,
    };
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    })
    this.props.hideModal();
  }

  handleDrop = (file) => {
    // console.log(files);
    // const uploaders = (file) => {
      const formData = new FormData(); // eslint-disable-line
      formData.append('file', file);
      formData.append('upload_preset', 'hkhkmnpg');
      formData.append('api_key', API_KEY);
      formData.append('timestamp', (Date.now() / 1000) || 0);

      // return axios.post('https://api.cloudinary.com/v1_1/dkwbeount/image/upload', JSON.stringify(formData), {
      //   headers: { 'content-type': 'application/json' },
      // }).then((response) => {
      //   // const { data } = response;
      //   // const fileURL = data.secure_url;
      //   console.log('res', JSON.parse(response));
      //   // axios.put('api/profile/image', { image: fileURL });
      //   // this.setState({
      //   //   image: fileURL,
      //   // });
      // }).catch(err => console.log(err))

      let apiUrl = 'https://api.cloudinary.com/v1_1/dkwbeount/image/upload';

      let data = {
        "file": file,
        "upload_preset": 'hkhkmnpg'
      }

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      }).then(r=> {
        console.log(r);
      }).catch(err => console.log(err))

    // axios.all(uploaders).then(() => {
    //   // this.setState({
    //   //   showChangePic: false,
    //   // });
    //   console.log('done', this.state);
    // });
  }

  render() {
    return (
      <View style={{margin:30}}>
        <Modal
          transparent={false}
          style={{backgroundColor: '#91A3B0'}}
          animationType="slide"
          presentationStyle="pageSheet"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.'); //change this
          }}>
          <View style={{backgroundColor: '#333'}}>
          <TouchableHighlight
            style={{ marginTop: 10, width: 120,
              height: 30,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#D7D7D7',
              borderWidth: 1}}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <Text style={{fontSize: 16, alignSelf: 'center', fontWeight: 'bold', color: 'white'}}>CANCEL</Text>
          </TouchableHighlight>
          <ScrollView style= {{margin: 30}}>{this.props.photos.map((p, i) => {
            return(
              <TouchableHighlight 
                key={i}
                onPress={() => Alert.alert(
                  'Change profile picture?',
                  '',
                  [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
                    {text: 'OK', onPress: () => this.handleDrop(p.node.image.uri)}
                  ],
                  // { cancelable: true }
              )}>
                <Image
                  style={{
                    width: 300,
                    height: 300,
                    marginTop: 10,
                    borderColor: 'white',
                    borderWidth: 2
                  }}
                  source={{ uri: p.node.image.uri }}
                  />
                </TouchableHighlight>
            )
          })}
          </ScrollView>
          </View>
        </Modal>
      </View>
    )
  }
}