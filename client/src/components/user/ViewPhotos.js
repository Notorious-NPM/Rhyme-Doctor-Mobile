import React, {Component} from 'react';
import axios from 'axios';

import { Image, View, ListView, StyleSheet, Text, TouchableHighlight, ScrollView, Modal, Alert, TextInput } from 'react-native';

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
      <View style={{margin:30, alignSelf: 'center'}}>
        <Modal
          transparent={true}
          style={{backgroundColor: '#91A3B0'}}
          animationType="slide"
          // presentationStyle="pageSheet"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.closeModal; //change this
          }}>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View style={{backgroundColor: 'white', height: 300}}>
            <TextInput
              style={{height: 200, width: 300, alignSelf: 'center', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, margin: 15}}
              placeholder="Type here..."
              placeholderTextColor="#333"
              name="input"
              onChangeText={(text) => this.setState({input: text})}
            />
            <View style={styles.button}>
                <TouchableHighlight 
                  style={styles.touchable}
                  onPress={() => this.addBio()}>
                <Text style={{color: '#D7D7D7', fontWeight: 'bold'}}>SUBMIT</Text>
              </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  button: {
    marginTop: 10,
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