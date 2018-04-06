import React from 'react';
import {Platform, ScrollView, View, Text, StyleSheet} from 'react-native';
import RapPostEntry from '../rap-post/RapPostEntry';

class UserPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userPosts = this.props.userPosts || [];
    return (
    <ScrollView style={styles.view}>
      {userPosts.map((userPost, i) => (<RapPostEntry
        rapPost={userPost}
        key={i}
      />))}
    </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      view: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 30,
      }
    },
    android: {
      view: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
      }
    }
  })
});

export default UserPosts;
