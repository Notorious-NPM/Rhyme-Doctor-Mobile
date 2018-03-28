import React, { Component } from 'react';
import io from 'socket.io-client/dist/socket.io';

import location from '../../../../config';

// import('./Chat.css');

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      messages: [],
      socket: null,
      randomCode: (Math.random() * 666).toString(),
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
      this.setState({ messages: [...this.state.messages, msg] });
    });

    this.setState({ socket: this.socket }) // eslint-disable-line

    // setTimeout(() => document.getElementById('selectedChat').style.width = "250px", 0);
  }

  sendMsg() {
    const { socket, randomCode, text } = this.state;
    socket.emit('client.sendMsg', { text, randomCode });
    this.textInput.clear();
  }

  render() {
    return (
      <View>
        <Text>Keep NavBar here</Text>
        <View style={styles.main}>
          <View>
            <Text style={styles.close}>X</Text>
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
        </View>
        <View style={styles.textInput}>
          <TextInput style={{ fontSize: 25 }} placeholder="enter txt here" 
            ref={input => {this.textInput = input}}
            onChangeText={(text) => this.setState({text})} 
            onSubmitEditing={() => this.sendMsg()}
          />
        </View>
      </View>
    );
  }
}

export default Chat;
