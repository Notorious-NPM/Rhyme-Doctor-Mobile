import React from 'react';
import axios from 'axios';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { LinearGradient } from 'expo';

import store from '../../redux/store.js';
import RapPostEntry from './RapPostEntry';
import SessionBar from '../navbar/SessionBar';
import Direction from '../buttons/Direction';

import styles from './RapPostCss';
import { location, port } from '../../../../config';

class RapPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
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
        selectedPost: 0,
      });
    } catch (err) {
      alert('Failed to get rap posts.');
    }
  }

  directionHandler = (direction) => {
    let { rapPosts, selectedPost } = this.state;
    if (direction === 'previous' && selectedPost > 0) {
      this.setState({ selectedPost: selectedPost - 1 });
    }

    if (direction === 'next' && selectedPost < rapPosts.length - 1) {
      this.setState({ selectedPost: selectedPost + 1 });
    }
  }

  render() {
    const { selectedPost, rapPosts } = this.state;
    let pic = {
      uri: 'https://i.imgur.com/vWA2TAB.jpg'
    };

    return (
      <View style={styles.main}>
        <SessionBar nav={this.props} />
        <ScrollView
          indicatorStyle={'white'}
          maximumZoomScale={2.0}
        >
          <View>
            <Image source={pic} style={{ alignSelf: 'stretch', height: 200}}/>
          </View>
          <View style={styles.directionContainer}>
            <TouchableOpacity onPress={() => this.directionHandler('previous')}>
              <Direction direction={"previous"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.directionHandler('next')}>
              <Direction direction={"next"}/>
            </TouchableOpacity>
          </View>
          {rapPosts && selectedPost >= 0 && 
            <RapPostEntry
              nav={this.props}
              key={Math.random() * 123456789}
              rapPost={rapPosts[selectedPost]}
              getRapPosts={this.getRapPosts}
              username={this.state.username}
            />}
        </ScrollView>
      </View>
    )
  }
}

export default RapPost;