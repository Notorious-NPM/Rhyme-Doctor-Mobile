import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuContext }  from 'react-native-menu';
import SessionBar from '../navbar/SessionBar';

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
      friendsListDisplay: false,
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
  //     },
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

  openFriendsList() {
    // const { socket } = this.state;
    // socket.emit('client.inLobby', this.state.store.user);
    const { friendsListDisplay } = this.state;
    this.setState({ friendsListDisplay: !friendsListDisplay });
  }

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
      <View style={{
        flex: 1,
        borderWidth: 1,
        borderColor: 'green',
        width: '90%',
        }}
      >
        <MenuContext>
        <SessionBar nav={this.props}/>
        <ScrollView style={[friends.list, !friendsListDisplay && { display: 'none' }]}>
          {friendsList.map((friend, index) =>
            (
              <View key={Math.random() * 1000} style={{ flexDirection: 'row' }}>
                <View key={Math.random() * 1000} style={friends.dot} />
                <Text
                  key={index}
                  style={friends.friend}
                  onPress={() => this.changeSelectedChat(index)}
                >
                  {friend[0]}
                </Text>
              </View>
            ))}
        </ScrollView>
        <View style={friends.button}>
          <TouchableOpacity onPress={() => this.openFriendsList()}>
            <Text style={friends.container}>Friends</Text>
          </TouchableOpacity>
        </View>
        {friendsList.map((friend, index) =>
          (
            <View>
              {/* <Chat friendName={friend[0]} roomID={friend[1]} index={index} mainSocket={socket} /> */}
            </View>
          ))}
          </MenuContext>
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
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#000000',
  },
  container: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#bbb',
    borderRadius: 100,
    margin: 8,
    position: 'relative',
    top: 10,

  },
  friend: {
    color: 'black',
    fontSize: 40,
  },
  list: {
    position: 'absolute',
    bottom: 24,
    right: 0,
    borderWidth: 1,
    borderColor: 'green',
    width: 220,
    height: 300,
  },
});