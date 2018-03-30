import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuContext }  from 'react-native-menu';
import SessionBar from '../navbar/SessionBar';
import Dimensions from 'Dimensions';
import FriendList from './FriendList';

// import React, { Component } from 'react';
// import axios from 'axios';
// import io from 'socket.io-client/dist/socket.io';
import Chat from './Chat';
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

  changeSelectedChat = (index) => {
    const { currentChatIndex } = this.state;
    this.setState({ currentChatIndex: index });
  }

    // const { socket } = this.state;
    // socket.emit('client.inLobby', this.state.store.user);

  render() {
    const { friendsList, friendsListDisplay, socket, currentChatIndex } = this.state;

    return (
      <View style={styles.main}>
        <SessionBar nav={this.props}/>
        <View style={{ width: '100%', height: Dimensions.get('window').height, borderWidth: 2 }}>
          <ScrollView>
            <Text style={styles.title}>Chats</Text>
            <View style={{ borderWidth: 1 }}>
            {friendsList.map((friend, index) =>
                <FriendList key={index} index={index} friend={friend} changeSelectedChat={this.changeSelectedChat}/>
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

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      container: {
        backgroundColor: '#000000',
      },
      main: {
        backgroundColor: '#333',
      },
      title: {
        color: '#EADC5B', 
        fontSize: 50, 
        padding: 5,
      }
    },
    android: {
      container: {
        backgroundColor: '#000000',
      },
      main: {
        backgroundColor: '#333',
      }
    }
  })
});

const friends = StyleSheet.create({
  ...Platform.select({
    ios: {
      show: {
        display: 'flex',
      },
      hide: {
        display: 'none',
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
    },
    android: {
      show: {
        display: 'flex',
      },
      hide: {
        display: 'none',
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
    }
  })
});