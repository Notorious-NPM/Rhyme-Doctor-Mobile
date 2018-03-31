import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Comments from './comments';
import Alert from '../alert';
// import Modal from '../modal';
// import './rapPost.css';
import { Button, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
      likes: this.props.rapPost.like_count,
      hidden: true,
    };
  }

  getComments = async (close = true) => {
    const comments = await axios.get(`/api/content/comments/${this.props.rapPost.id}`);
    if (close) {
      this.setState({
        comments: comments.data,
        showComments: !this.state.showComments,
      });
    } else {
      this.setState({
        comments: comments.data,
      });
    }
  }

  likeRapPost = async () => {
    try {
      await axios.put(
        '/api/vote/upvote',
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
        '/api/content/report',
        { rapPostId: this.props.rapPost.id },
      );
      this.activateAlert('success', 'Report was successfully submitted');
    } catch (err) {
      console.log('Report was already submitted');
      this.activateAlert('warning', 'Report was already submitted');
    }
  }

  createComment = (e) => {
    this.setState({ myComment: e.target.value });
  }

  postComment = async () => {
    if (this.state.myComment) {
      const status = await axios.post(
        '/api/content/comment',
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
      <View style={styles.main}>
        <View>
          {alert && <Alert message={alertMessage} status={alertStatus} />}
          <View style={styles.buttonMain}>
            <TouchableOpacity style={styles.likeButton} onPress={this.likeRapPost}>
              <View style={styles.likeTopContainer}>
                <View>
                  <Text style={styles.likeText}>Like</Text>
                </View>
                <View style={styles.likeNumContainer}>
                  <Text style={styles.likeNum}>{likes}</Text>
                </View>
              </View>
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
      </View>
    );
  }
}

export default RapPostEntry;

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        borderRadius: 5,
        flex: 1,
        marginBottom: 20,
        backgroundColor: '#91A3B0',
        paddingTop: 20,
        padding: 20,
      },
      likeButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        borderWidth: 1,
        width: 85,
        height: 45,
      },
      buttonMain: {
        alignItems: 'center',
        marginTop: 20,
      },
      likeNum:{
        fontSize: 15,
      },
      likeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
      },
      likeNumContainer: {
        backgroundColor: 'white',
        borderRadius: 3,
        width: 20,
        height: 20,
        marginTop: 3,
        marginLeft: 5,
        alignItems: 'center',
      },
      likeTopContainer: {
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'row',
      },
      rapTextInner: {
        paddingRight: 10,
        paddingLeft: 10,
      },
      rapTextOuter: {
        backgroundColor: 'white',
      },
      reportButton: {
        alignItems: 'center',
        backgroundColor: '#ffc107',
        height: 20,
        width: 90,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
      },
      reportText: {
        marginTop: 1,
        fontSize: 14,
        fontWeight: '700',
      },
      userMain: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
      },
      username: {
        fontSize: 25,
        fontWeight: '800',
      },
      usernameLink: {
        textDecorationLine: 'underline'
      }
    },
    android: {
      main: {
        borderRadius: 5,
        flex: 1,
        marginBottom: 20,
        backgroundColor: '#91A3B0',
        paddingTop: 20,
        padding: 20,
      },
      likeButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        borderWidth: 1,
        width: 85,
        height: 45,
      },
      buttonMain: {
        alignItems: 'center',
        marginTop: 20,
      },
      likeNum:{
        fontSize: 15,
      },
      likeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
      },
      likeNumContainer: {
        backgroundColor: 'white',
        borderRadius: 3,
        width: 20,
        height: 20,
        marginTop: 3,
        marginLeft: 5,
        alignItems: 'center',
      },
      likeTopContainer: {
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'row',
      },
      rapTextInner: {
        paddingRight: 10,
        paddingLeft: 10,
      },
      rapTextOuter: {
        backgroundColor: 'white',
      },
      reportButton: {
        alignItems: 'center',
        backgroundColor: '#ffc107',
        height: 20,
        width: 90,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
      },
      reportText: {
        marginTop: 1,
        fontSize: 14,
        fontWeight: '700',
      },
      userMain: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
      },
      username: {
        fontSize: 25,
        fontWeight: '800',
      },
      usernameLink: {
        textDecorationLine: 'underline'
      }
    }
  })
})