import React from 'react';
import axios from 'axios';
import { ScrollView, Text, View } from 'react-native';
import store from '../../redux/store.js';
import RapPostEntry from './RapPostEntry';
import SessionBar from '../navbar/SessionBar';

import styles from './RapPostCss';
import location from '../../../../config';

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
    try {
      let url = `http://${location}:3421/api/content/posts`;
      if (this.props.subscription === 1) {
        url = `http://${location}:3421/api/content/friendsPosts`;
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
    
    return (
      rapPosts ? 
      <View style={styles.main}>
        <SessionBar nav={this.props} />
        <ScrollView style={styles.view}>
          {rapPosts.map((rapPost, i) => (<RapPostEntry
            nav={this.props}
            rapPost={rapPost}
            key={i}
            getRapPosts={this.getRapPosts}
            username={this.state.username}
          />))}
        </ScrollView>
      </View>
      :
      <View style={styles.main}>
        <SessionBar nav={this.props} />
      </View>
    )
  }
}

export default RapPost;