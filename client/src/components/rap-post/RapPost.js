import React from 'react';
import axios from 'axios';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import store from '../../redux/store.js';
import RapPostEntry from './RapPostEntry';
import SessionBar from '../navbar/SessionBar';
import Loading from './Loading';

import styles from './RapPostCss';
import { location, port } from '../../../../config';

class RapPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.state = store.getState();
    });
  }

  componentDidMount = () => {
    this.getRapPosts();
  }

  getRapPosts = async () => {
    this.props.navigation.state.params
    try {
      let url = `https://${location}:${port}/api/content/posts`;
      if (this.props.navigation.state.params && this.props.navigation.state.params.subscription === 1) {
        url = `https://${location}:${port}/api/content/friendsPosts`;
      }
      const rapPosts = await axios.get(url);
      this.setState({
        rapPosts: rapPosts.data,
      });
    } catch (err) {
      alert('Failed to get rap posts.');
    }
  }

  render() {
    const { rapPosts } = this.state;
    let pic = {
      uri: 'https://i.imgur.com/vWA2TAB.jpg'
    };

    return (
      <View style={styles.main}>
        <SessionBar nav={this.props} />
        {rapPosts ? 
          <ScrollView>
            <View>
              <Image source={pic} style={{ alignSelf: 'stretch', height: 200}}/>
            </View>
            <View style={styles.view}>
            {rapPosts.map((rapPost, i) => (<RapPostEntry
              nav={this.props}
              rapPost={rapPost}
              key={i}
              getRapPosts={this.getRapPosts}
              username={this.state.username}
            />))}
            </View>
          </ScrollView>
          :
          <Loading />}
      </View>
    )
  }
}

export default RapPost;