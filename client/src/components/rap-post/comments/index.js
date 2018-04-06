import React, { Component } from 'react';
import { Dimensions, Keyboard, Text, View, TextInput, TouchableOpacity } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import { LinearGradient } from 'expo';
import styles from './CommentCss';


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unhideInput: false,
    }
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({ unhideInput: true });
  }

  _keyboardDidHide = () => {
    this.setState({ unhideInput: false });
  }

  render() {
    return (
      <View behavior="padding">
        <View style={styles.main}>
          {
            this.props.comments.map((comment, index) =>
              <View style={styles.comment} key={index}>
                <Text style={styles.name}>
                  {comment.name}
                </Text>
                <Text>
                  {comment.text}
                </Text>
              </View>)
          }
          <TextInput
            value={this.props.myComment}
            onChangeText={(text) => this.props.createComment(text)}
            style={[styles.inputBox, this.state.unhideInput && styles.commentsPopShow]}
            numberOfLines={3}
            placeholder="Add a comment..."
          />
        </View>
  
        <View style={styles.commentButtonMain}>
          <TouchableOpacity style={styles.commentButton} onPress={() => this.props.postComment()}>
            <LinearGradient
              colors={['#D0E4F7', '#73B1E7', '#0A77D5', '#0A77D5', '#0A77D5', '#0A77D5', '#539FE1', '#539FE1', '#87BCF3']}
              locations={[0, 0.07, 0.17, 0.53, 0.53, 0.57, 0.89, 0.99, 1]}
              style={styles.commentButtonGradient}>
              <View style={styles.commentTopContainer}>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.commentText}>Post</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
  
      </View>)
  }
}

export default Comments;
