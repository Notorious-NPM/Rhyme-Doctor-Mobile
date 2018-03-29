import React from 'react';
import axios from 'axios';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
// import UserPosts from './UserPosts';
// import Stats from './Stats';
// import ProfileImage from './ProfileImage';
// import Bio from './Bio';
// import FriendButton from '../buttons/FriendButton';

// import store from '../../redux/store';

export default class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userPosts: [],
  //     username: '',
  //     likeCount: '',
  //     image: '',
  //     bio: '',
  //     received: false,
  //   };
  // }

  // componentWillMount() {
  //   if (this.props.location.state) {
  //     const { username } = this.props.location.state;
  //     this.getUserData(username);
  //     this.getUserPosts(username);
  //   } else {
  //     this.getUserData();
  //     this.getUserPosts();
  //   }
  // }

  // componentDidMount() {
  //   this.setState(store.getState());  // eslint-disable-line
  //   store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  // getUserData = async (username) => {
  //   try {
  //     const userData = username ? await axios.get('api/profile', { params: { name: username } }) : await axios.get('api/profile');
  //     this.setState({
  //       username: userData.data.name,
  //       likeCount: userData.data.like_count,
  //       image: userData.data.image,
  //       bio: userData.data.bio,
  //       received: true,
  //     });
  //   } catch (err) {
  //     console.log('Failed to get user posts');
  //   }
  // }

  // getUserPosts = async (username) => {
  //   try {
  //     const userPosts = username ? await axios.get('api/profile/posts', { params: { name: username } }) : await axios.get('api/profile/posts');
  //     this.setState({
  //       userPosts: userPosts.data,
  //     });
  //   } catch (err) {
  //     console.log('Failed to get user posts');
  //   }
  // }

  render() {
    // const { state } = this.props.location;
    let pic = {
      uri: 'http://res.cloudinary.com/dkwbeount/image/upload/v1521756607/kxm8w88g0n7jsmsjungf.jpg'
    }
    let name = 'meowskers'
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.topContainer}>
            <View style={styles.image}>
              <Image source={pic} style={{height: 100, width: 100}}/>
            </View>
            <View style={styles.bio}>
              <Text>{name}</Text>
            </View>
          </View>
          <Text style={{color:'white', textAlign:'center', paddingTop: 10, paddingBottom: 10}}>Compose as you normally would. But be aware: commas signify a word to be rhymed with, as does the end of a line.</Text>
          <TextInput
            style={{height: 150, width: 300, alignSelf: 'center', backgroundColor: '#D7D7D7', borderColor: 'gray', borderWidth: 1}}
            placeholder="Type here..."
            placeholderTextColor="#333"
          // onChangeText={(text) => this.setState({text})}
          // value={this.state.text}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                // onPress={onPressLearnMore}
                title="Post"
                color="#333"
                // accessibilityLabel="Learn more about this purple button"
              />
            </View>
            <View style={styles.button}>
              <Button
                // onPress={onPressLearnMore}
                title="Hit API"
                color="#333"
                // accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  button: {
    margin: 10,
    borderColor: '#D7D7D7',
    borderWidth: 1
  },
  buttonContainer: {
    width: '100%',
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
    margin: 10
  },
  image: {
    flexDirection: 'column'
  },
  bio: {
    marginTop: 20,
    flexDirection: 'column'
  },
  topContainer: {
    flexDirection: 'row'
  }
});