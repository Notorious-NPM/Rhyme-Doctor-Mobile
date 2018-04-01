import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { MenuContext }  from 'react-native-menu';
import Dimensions from 'Dimensions';
import axios from 'axios';
import io from 'socket.io-client/dist/socket.io';

import SessionBar from '../navbar/SessionBar';
import FriendList from './FriendList';
import Chat from './Chat';

import store from '../../redux/store';
import { location, port, socketPort } from '../../../../config';
import { friends, styles } from './FriendChatCss';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: [],
      friendsDot: {},
      socket: null,
      store: store.getState(),
      setInactive: {},
      currentChatIndex: -1,
    };
    store.subscribe(() => {
      this.state = store.getState();
    });
  }

  async componentDidMount() {
    const { friendsDot } = this.state;
    axios
      .get(`https://${location}:${port}/api/user/friend`)
      .then(({ data }) => {
        const friendsList = [];
        data.forEach(friend => {
          friendsList.push([friend.name, friend.roomID]);
          friendsDot[friend.name] = '#bbb';
        })
        this.setState({ friendsList, friendsDot });
      })
      .catch(err => alert('FriendChat componentMount error: ', err));

    this.socket = io(`https://${location}:${socketPort}`, {
      query: {
        roomId: 'lobby',
      },
    });
  
    await this.socket.on('server.inLobby', (payload) => {
      const { friendsDot } = this.state;
      if (friendsDot[payload]) {
        friendsDot[payload] = '#0EFF2E';
      }
      this.setState({ friendsDot });
      // const domElement = document.getElementsByClassName(payload);
      // const domElement = []
      // if (domElement.length > 0) {
      //   domElement[0].style.backgroundColor = '#0EFF2E';
      //   const { setInactive } = this.state;
      //   if (setInactive[payload]) {
      //     clearTimeout(setInactive[payload]);
      //   }
      //   setInactive[payload] = setTimeout(() => { domElement[0].style.backgroundColor = '#bbb'; }, 20000);
      //   this.setState({ setInactive });
      // }
    });

    await this.socket.emit('client.inLobby', this.state.store.user);

    this.setState( { socket: this.socket });
  }

  changeSelectedChat = (index) => {
    const { currentChatIndex } = this.state;
    this.setState({ currentChatIndex: index });
  }

  render() {
    const { friendsList, friendsDot, friendsListDisplay, socket, currentChatIndex } = this.state;

    return (
      <View style={styles.main}>
        <SessionBar nav={this.props}/>
        <View style={{ width: '100%', height: Dimensions.get('window').height, borderWidth: 2 }}>
          <ScrollView>
            <Text style={styles.title}>Chats</Text>
            <View style={{ borderWidth: 1 }}>
            {friendsList.map((friend, index) =>
                <FriendList key={index} index={index} friend={friend} dot={friendsDot[friend.name]} changeSelectedChat={this.changeSelectedChat}/>
              )}
            </View>
          </ScrollView>
          {friendsList.map((friend, index) =>
            (
            <View key={index} style={ index === currentChatIndex ? friends.show : friends.hide }>
              <Chat friendName={friend[0]} roomID={friend[1]} index={index} mainSocket={socket} changeSelectedChat={this.changeSelectedChat} />
            </View>
            ))}
        </View>
      </View>
    );
  }
}