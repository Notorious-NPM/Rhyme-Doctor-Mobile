import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuContext }  from 'react-native-menu';
import SessionBar from '../navbar/SessionBar';
import Dimensions from 'Dimensions';
import FriendList from './FriendList';

// import React, { Component } from 'react';
// import axios from 'axios';
// import io from 'socket.io-client/dist/socket.io';
// import Chat from './Chat';
// import store from '../../redux/store';

// import './FriendChat.css';
// import location from '../../../../config';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: [
        ['Joker', 'one'],
        ['Batman', 'two'],
        ['Robin', 'three'],
        ['Clayface', 'four'],
        ['Harley Q', 'five'],
        ['Solomon G', 'six'],
        ['Azrael', 'six'],
      ],
      socket: null,
      // store: store.getState(),
      setInactive: {},
      currentChatIndex: -1,
    };
    // store.subscribe(() => {
    //   this.state = store.getState();
    // });
  }

  // componentDidMount() {
  //   axios
  //     .get('/api/user/friend')
  //     .then(({ data }) => {
  //       const friendsList = [];
  //       data.forEach(friend =>
  //         friendsList.push([friend.name, friend.roomID]));
  //       this.setState({ friendsList }) // eslint-disable-line
  //     })
  //     .catch(err => console.log('FriendChat componentMount error: ', err));

  //   this.socket = io(`http://${location}:3444`, {
  //     query: {
  //       roomId: 'lobby',
      // },
  //   });
  
  //   this.socket.on('server.inLobby', (payload) => {
  //     const domElement = document.getElementsByClassName(payload);
  //     if (domElement.length > 0) {
  //       domElement[0].style.backgroundColor = '#0EFF2E';
  //       const { setInactive } = this.state;
  //       if (setInactive[payload]) {
  //         clearTimeout(setInactive[payload]);
  //       }
  //       setInactive[payload] = setTimeout(() => { domElement[0].style.backgroundColor = '#bbb'; }, 20000);
  //       this.setState({ setInactive });
  //     }
  //   });

  //   this.setState( { socket: this.socket }); // eslint-disable-line
  // }

  // async changeSelectedChat(index) {
  //   const { socket, currentChatIndex } = this.state;

  //   if (currentChatIndex >= 0) {
  //     const currentChat = document.getElementById(`show-${currentChatIndex}`);
  //     currentChat.style.width = '0px';
  //     currentChat.classList.add('hide');
  //   }

  //   await socket.emit('client.selectedChat', index);
  //   this.setState({ currentChatIndex: index });
  // }

    // const { socket } = this.state;
    // socket.emit('client.inLobby', this.state.store.user);


  // openFriendList(e) {
  //   e.preventDefault();
  //   document.getElementById('friendList').style.height = '200px';

  //   const { socket } = this.state;
  //   socket.emit('client.inLobby', this.state.store.user);
  // }

  // closeFriendList() {
  //   document.getElementById('friendList').style.height = '0';
  //   const { currentChatIndex } = this.state;

  //   if (currentChatIndex >= 0) {
  //     const currentChat = document.getElementById(`show-${currentChatIndex}`);
  //     currentChat.style.width = '0px';
  //     currentChat.classList.add('hide');
  //     this.setState({ currentChatIndex: -1 });
  //   }
  // }

  render() {
    const { friendsList, friendsListDisplay, socket } = this.state;

    return (
      <View>
        <SessionBar nav={this.props}/>
        <View style={{ width: '100%', height: Dimensions.get('window').height, borderWidth: 2 }}>
          <ScrollView>
            <Text style={{ color: 'green', fontSize: 50, padding: 5 }}>Chats</Text>
            <View style={{ borderWidth: 1 }}>
            {friendsList.map((friend, index) =>
                <FriendList key={index} index={index} friend={friend} changeSelectedChat={this.changeSelectedChat}/>
              )}
            </View>
          </ScrollView>
          {/* {friendsList.map((friend, index) =>
            (
              <View> }
                <Chat friendName={friend[0]} roomID={friend[1]} index={index} mainSocket={socket} />
                </View>
            ))} */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
});

const friends = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#bbb',
    borderRadius: 100,
    margin: 8,
    position: 'relative',
    top: 10,

  },
  name: {
    color: 'white',
    fontSize: 40,
  },
  list: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});