import React, { Component } from 'react';
import { ScrollView, StyleSheet, FlatList, Text, TouchableOpacity, View } from 'react-native';

// import React, { Component } from 'react';
// import axios from 'axios';
// import io from 'socket.io-client/dist/socket.io';
// import Chat from './Chat';
// import store from '../../redux/store';

// import './FriendChat.css';
// import location from '../../../../config';

export default class Friends extends Component {
  constructor(props) {
    super(props)
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
      selectedChat: null,
      showFriends: false,
      // store: store.getState(),
      setInactive: {},
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

  // changeSelectedChat(friendName, roomID) {
  //   this.setState({ selectedChat: false });
  //   setTimeout(() => {
  //     this.setState({ selectedChat: [friendName, roomID] });
  //     document.getElementById('selectedChat').classList.remove('hide');
  //   }, 0);
  // }

  // openFriendList(e) {
  //   e.preventDefault();
  //   document.getElementById("friendList").style.height = "200px";

  // }

  // closeFriendList() {
  //   document.getElementById("friendList").style.height = "0";
  //   this.setState({ selectedChat: false });
  // }

  openFriendsList() {
    const { showFriends } = this.state; 
    // const { socket } = this.state;
    // socket.emit('client.inLobby', this.state.store.user);
    this.setState({ showFriends: !showFriends });
  }

  render() {
    const { showFriends, friendsList } = this.state;
    // const { selectedChat } = this.state;

    return (
      <View style={{ flex: 1, borderWidth: 1, borderColor: 'green', width: '90%' }}>
        <View style={{ height: 300 }}>
            {showFriends && (
              <ScrollView style={friends.list}>
              {friendsList.map((friend, index) => 
                <Text key={index} onPress={() => this.changeSelectedChat(friend[0], friend[1])}>{friend[0]}</Text>       
              )}
              </ScrollView>
            )}
        </View>
        <View style={friends.button}>
          <TouchableOpacity onPress={() => this.openFriendsList()}>
            <Text style={friends.container}>Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
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
  friend: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center'
  },
  list: {
    borderWidth: 1,
    borderColor: 'green',
    width: 200,
  }
});


      {/* <View style={{ flex: 1 }}>
        <View style={{ height: 300 }}>
        <ScrollView style={friends.list}>
          {showFriends && friendsList.map( (friend, i) => 
          <Text style={friends.friend} key={i}>{friend}</Text>)}
        </ScrollView>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.updateState()}>
            <Text style={friends.container}>Friends</Text>
          </TouchableOpacity>
        </View>
      </View> */}