import React, {Component} from 'react';
import axios from 'axios';

import { Image, View, ListView, StyleSheet, Text, TouchableHighlight, Platform, ScrollView, Modal, Alert, TextInput } from 'react-native';

import API_KEY from './config';
import { location, port } from '../../../../config';

export default class EditBio extends React.Component {
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

  updateBio(){
    axios.put(`https://${location}:${port}/api/profile/bio`, { bio: this.state.input })
      .then(() => {
        this.props.addBio(this.state.input);
      })
  }

  render() {
    return (
      <View style={{margin:30, alignSelf: 'center'}}>
        <Modal
          transparent={true}
          animationType="slide"
          // presentationStyle="pageSheet"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.closeModal; //change this
          }}>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <View style={{backgroundColor: '#333', borderColor: 'white', borderWidth: 2, height: 300}}>
              <TextInput
                style={{height: 200, width: 300, alignSelf: 'center', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, margin: 15}}
                placeholder="Type here..."
                placeholderTextColor="#333"
                name="input"
                onChangeText={(text) => this.setState({input: text})}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <TouchableHighlight 
                      style={styles.touchable}
                      onPress={() => this.updateBio()}>
                    <Text style={{color: '#D7D7D7', fontWeight: 'bold'}}>SUBMIT</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.button}>
                    <TouchableHighlight 
                      style={styles.touchable}
                      onPress={() => this.props.showEdit()}>
                    <Text style={{color: '#D7D7D7', fontWeight: 'bold'}}>CANCEL</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      button: {
        margin: 10,
        width: 70,
        height: 30,
        borderColor: '#D7D7D7',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      container: {
        flex: 1,
        backgroundColor: '#333',
      },
      innerContainer : {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      bio: {
        flex: 1,
        marginTop: 5,
        alignSelf: 'center'
      }
    },
    android: {
      button: {
        margin: 10,
        width: 70,
        height: 30,
        borderColor: '#D7D7D7',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonContainer: {
        flex: 1,
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
    }
  })
});