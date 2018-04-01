import React, { Component } from 'react';
import io from 'socket.io-client/dist/socket.io';
import { Keyboard, ScrollView, Text, TextInput, View } from 'react-native';

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
      if (randomCode === this.state.randomCode) {
        msg = 'Me: ' + msg;
      } else {
        msg = this.props.friendName + ': ' + msg;
      }
      this.setState({ messages: [...this.state.messages, msg] });
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

    return (
      <ScrollView>
      <View>
        <View style={styles.main}>
          <View>
            <Text style={styles.close} onPress={() => this.props.changeSelectedChat(-1)}>X</Text>
          </View>
          <View style={styles.chatDisplay}>
            <ScrollView     
              ref={ref => this.scrollView = ref}
              onContentSizeChange={(contentWidth, contentHeight) => {        
              this.scrollView.scrollToEnd({animated: true});
            }}>
              {messages.map((text, i) => {
                return (
                  <View style={styles.txtBubble} key={i}>
                    <Text style={styles.chatText} key={i}>{text}</Text>
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