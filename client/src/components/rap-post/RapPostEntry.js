import React from 'react';
import axios from 'axios';
import Alert from '../alert';
import Comments from './comments';
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo';
import InputScrollView from 'react-native-input-scroll-view';

import { location, port } from '../../../../config';
import styles from './RapPostEntryCss';

class RapPostEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      showComments: false,
      myComment: '',
      alert: false,
      alertStatus: '',
      alertMessage: '',
      timer: undefined,
      likes: props.rapPost.like_count,
      hidden: true,
    };
  }

  getComments = async (close = true) => {
    const comments = await axios.get(`https://${location}:${port}/api/content/comments/${this.props.rapPost.id}`);
    const reversedComments = comments.data.reverse();
    if (close) {
      this.setState({
        comments: reversedComments,
        showComments: !this.state.showComments,
      });
    } else {
      this.setState({
        comments: reversedComments,
      });
    }
  }

  likeRapPost = async () => {
    try {
      await axios.put(
        `https://${location}:${port}/api/vote/upvote`,
        { rapPostId: this.props.rapPost.id },
      );
      this.activateAlert('success', 'You liked this rap post!');
      if (this.props.onProfile) {
        this.props.getUserPosts();
        this.props.getUserData();
      } else {
        this.setState({ likes: this.state.likes + 1 });
      }
    } catch (err) {
      console.log('Post was already liked');
      this.activateAlert('warning', 'Rap post was already liked');
    }
  }

  reportPost = async () => {
    try {
      await axios.post(
        `https://${location}:${port}/api/content/report`,
        { rapPostId: this.props.rapPost.id },
      );
      this.activateAlert('success', 'Report was successfully submitted');
    } catch (err) {
      console.log('Report was already submitted');
      this.activateAlert('warning', 'Report was already submitted');
    }
  }

  createComment = (text) => {
    this.setState({ myComment: text });
  }

  postComment = async () => {
    if (this.state.myComment) {
      const status = await axios.post(
        `https://${location}:${port}/api/content/comment`,
        {
          text: this.state.myComment,
          username: this.props.rapPost.username,
          postId: this.props.rapPost.id,
        },
      );
      console.log(status.statusText);
      this.setState({ myComment: '' });
      this.getComments(false);
    }
  }

  activateAlert = (status, message) => {
    this.setState({
      alert: true,
      alertStatus: status,
      alertMessage: message,
    });
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
    this.setState({
      timer: setTimeout(() => this.setState({ alert: false }), 3000),
    });
  }

  triggerModal = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
    this.getComments();
  }

  parseText = (jsonString) => {
    const rapObj = JSON.parse(jsonString);
    const rapText = rapObj.map((word, i) => {
      if (typeof word === 'object') {
        return <Text key={i} style={{ color: word.color }}>{`${word.word} `}</Text>;
      } else if (word === '\n') {
      return <Text key={i}>{'\n'}</Text>;
      }
      return <Text key={i}>{`${word} `}</Text>;
    });

    return rapText;
  }

  render() {
    const { username } = this.props.rapPost;
    const rapText = this.parseText(this.props.rapPost.text);
    const { alert, alertMessage, alertStatus, likes } = this.state;
    const { nav } = this.props;

    return (
      <View
        style={styles.main}
      >
        <View>
          {alert && <Alert message={alertMessage} status={alertStatus} />}
          <View style={styles.buttonMain}>
            <TouchableOpacity style={styles.likeButton} onPress={this.likeRapPost}>
              <LinearGradient  
                colors={['#D0E4F7', '#73B1E7', '#0A77D5', '#0A77D5', '#0A77D5', '#0A77D5', '#539FE1', '#539FE1', '#87BCF3']} 
                locations={[0, 0.07, 0.17, 0.53, 0.53, 0.57, 0.89, 0.99, 1]}
                style={styles.likeButtonGradient}>
                <View style={styles.likeTopContainer}>
                  <View>
                    <Text style={styles.likeText}>Like</Text>
                  </View>
                  <View style={styles.likeNumContainer}>
                    <Text style={styles.likeNum}>{likes}</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonMain}>
            <TouchableOpacity style={styles.reportButton} onPress={this.reportPost}>
              <Text style={styles.reportText}>Report Post</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userMain}>
            <Text style={styles.username}>By </Text>
            <Text style={[styles.username, styles.usernameLink]} onPress={() => nav.navigation.navigate('Profile', {username})}>{username}</Text>
          </View>
       </View>
        <View style={styles.rapTextOuter}>
          <ScrollView style={styles.rapTextInner}>
            <Text>{rapText}</Text>
          </ScrollView>
        </View>

          <View style={styles.commentButtonMain}>
            <TouchableOpacity style={styles.commentButton} onPress={this.getComments}>
              <LinearGradient  
                colors={['#D0E4F7', '#73B1E7', '#0A77D5', '#0A77D5', '#0A77D5', '#0A77D5', '#539FE1', '#539FE1', '#87BCF3']} 
                locations={[0, 0.07, 0.17, 0.53, 0.53, 0.57, 0.89, 0.99, 1]}
                style={styles.commentButtonGradient}>
                <View style={styles.commentTopContainer}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.commentsText}>{this.state.showComments ? 'Close' : 'Comments'}</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

        {this.state.showComments ?
          <Comments
            comments={this.state.comments}
            myComment={this.state.myComment}
            createComment={this.createComment}
            postComment={this.postComment}
          /> : null}

      </View>
    );
  }
}

export default RapPostEntry;
