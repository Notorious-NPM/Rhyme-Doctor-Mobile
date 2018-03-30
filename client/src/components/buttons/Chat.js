import React, { Component } from 'react';
import io from 'socket.io-client/dist/socket.io';
import { Keyboard, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import location from '../../../../config';
import Dimensions from 'Dimensions';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      messages: [],
      socket: null,
      randomCode: (Math.random() * 666).toString(),
      unhideInput: false,
    };
  }

  async componentDidMount() {
    this.socket = await io(`http://${location}:3444`, {
      query: {
        roomId: this.props.roomID,
      },
    });

    await this.socket.on('server.sendMsg', ({ text, randomCode }) => {
      if (randomCode === this.state.randomCode) {
        text = 'Me: ' + text;
      } else {
        text = this.props.friendName + ': ' + text;
      }
      this.setState({ messages: [...this.state.messages, text] });
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
    const { socket, randomCode, text } = this.state;
    socket.emit('client.sendMsg', { text, randomCode });
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
                onChangeText={(text) => this.setState({text})} 
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

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      close: {
        textAlign: 'right',
        marginRight: 5,
        color: 'white',
        fontSize: 20,
      },
      main: {
        margin: '2%',
        height: Dimensions.get('window').height * .87,
        borderWidth: 1, 
        backgroundColor: 'black',
        width: '95%',
      },
      mobilePopShow: {
        position: 'absolute',
        width: '100%',
        top: '48%',
        left: 0,
      },
      chatDisplay: {
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: 10,
        width: '90%',
        height: '80%',
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'white',
      },
      chatText: {
        fontSize: 20,
        paddingBottom: 2,
        color: 'black',
      },
      textInput: {
        height: 40,
        left: '7%', 
        right: '7%',
        borderWidth: 1,
        width: 300,
        backgroundColor: 'white',
      },
      txtBubble:{
        backgroundColor: 'grey',
        borderRadius: 10,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        flex: 1,
      },
    }, 
    android: {
      close: {
        textAlign: 'right',
        marginRight: 5,
        color: 'white',
        fontSize: 20,
      },
      main: {
        margin: '2%',
        height: Dimensions.get('window').height * .87,
        borderWidth: 1, 
        backgroundColor: 'black',
        width: '95%',
      },
      mobilePopShow: {
        position: 'absolute',
        width: '100%',
        top: '48%',
        left: 0,
      },
      chatDisplay: {
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: 10,
        width: '90%',
        height: '80%',
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'white',
      },
      chatText: {
        fontSize: 20,
        paddingBottom: 2,
        color: 'black',
      },
      textInput: {
        height: 40,
        left: '7%', 
        right: '7%',
        borderWidth: 1,
        width: 300,
        backgroundColor: 'white',
      },
      txtBubble:{
        backgroundColor: 'grey',
        borderRadius: 10,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        flex: 1,
      },
    }
  })
})
