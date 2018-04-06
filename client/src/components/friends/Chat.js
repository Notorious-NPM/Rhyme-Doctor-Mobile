import React, { Component } from 'react';
import io from 'socket.io-client/dist/socket.io';
import { Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { location, socketPort } from '../../../../config';
import styles from './ChatCss';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      messages: [],
      socket: null,
      randomCode: (Math.random() * 666).toString(),
      unhideInput: false,
    };
  }

  async componentDidMount() {
    this.socket = await io(`https://${location}:${socketPort}`, {
      query: {
        roomId: this.props.roomID,
      },
    });

    await this.socket.on('server.sendMsg', ({ msg, randomCode }) => {
      let message = { text: msg };
      if (randomCode === this.state.randomCode) {
        // msg = 'Me: ' + msg;
        message.position = 'right';
      } else {
        // msg = this.props.friendName + ': ' + msg;
        message.position = 'left';
      }
      this.setState({ messages: [...this.state.messages, message] });
    });

    this.setState({ socket: this.socket }) // eslint-disable-line
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({ unhideInput: true })
  }

  _keyboardDidHide = () => {
    this.setState({ unhideInput: false })
  }

  sendMsg = () => {
    const { socket, randomCode, msg } = this.state;
    socket.emit('client.sendMsg', { msg, randomCode });
    this.textInput.clear();
  }

  render() {
    const { messages, unhideInput } = this.state;
    const { friendName } = this.props;

    return (
      <ScrollView>
      <View>
        <View style={styles.main}>
          <View style={styles.chatHeader}>
            <View style={styles.friendNameContainer}>
              <Text style={styles.friendNameText}>{friendName}</Text>
            </View>
            <TouchableOpacity onPress={() => this.props.changeSelectedChat(-1)} style={styles.closeContainer}>
              <Text style={styles.close}>BACK</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.chatDisplay}>
            <ScrollView     
              ref={ref => this.scrollView = ref}
              onContentSizeChange={(contentWidth, contentHeight) => {        
              this.scrollView.scrollToEnd({animated: true});
            }}>
              {messages.map((message, i) => {
                return (
                  <View 
                    style={[
                      styles.txtBubbleContainer,
                      { alignItems: message.position === 'left' ? 'flex-start' : 'flex-end' }
                    ]} 
                    key={i}>
                    <View style={[styles.txtBubble, { backgroundColor: message.position === 'left' ? '#E8EDF9' : '#FFFFAF' }]}>
                      <Text style={[styles.chatText, { textAlign: message.position }]} key={i}>{message.text}</Text>
                    </View>
                  </View>
                )
              })}
            </ScrollView>
          </View>
          <View style={[styles.textInput, unhideInput && styles.mobilePopShow]}>
            <TextInput style={{ fontSize: 25, zIndex: 1, }} placeholder="enter txt here" 
                ref={input => {this.textInput = input}}
                onChangeText={(text) => this.setState({ msg: text })} 
                onSubmitEditing={() => this.sendMsg()}
              />
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

export default Chat;