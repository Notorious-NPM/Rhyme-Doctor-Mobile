import React from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import store from '../../redux/store.js';
import RapPostEntry from './RapPostEntry';
import SessionBar from '../navbar/SessionBar';
// import { Session } from 'inspector';

class RapPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rapPosts: null
    }
    // this.state = store.getState();
    // store.subscribe(() => {
    //   this.state = store.getState();
    // });
  }

  // componentDidMount = () => {
  //   this.getRapPosts();
  // }

  getRapPosts = async () => {
    try {
      let url = '/api/content/posts';
      if (this.props.subscription === 1) {
        url = '/api/content/friendsPosts';
      }
      const rapPosts = await axios.get(url);  //need to add ip address
      this.setState({
        rapPosts: rapPosts.data,
      });
    } catch (err) {
      console.log('Failed to get rap posts.');
    }
  }

  render() {
    const rapPosts = this.state.rapPosts || [];
    return (
      <View style={styles.main}>
        <SessionBar nav={this.props} />
        {rapPosts.map((rapPost, i) => (<RapPostEntry
          rapPost={rapPost}
          key={i}
          getRapPosts={this.getRapPosts}
          username={this.state.username}
        />))}
      </View>
    );
  }
}

export default RapPost;


const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        backgroundColor: '#333',
        flex: 1,
      }
    },
    android: {
      main: {
        backgroundColor: '#333',
      }
    }
  })

})