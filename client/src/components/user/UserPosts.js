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
    // <View style={styles.main}>
    <ScrollView style={styles.view}>
    {/* <Text>{userPosts.length}</Text> */}
      {userPosts.map((userPost, i) => (<RapPostEntry
        rapPost={userPost}
        key={i}
        // getRapPosts={this.getRapPosts}
        // username={this.state.username}
      />))}
    </ScrollView>
  // </View>
    // return (
    //   <div className="row">
    //     {userPosts.map((userPost, i) => <RapPostEntry rapPost={userPost} key={i} getUserPosts={this.props.getUserPosts} getUserData={this.props.getUserData} onProfile />).reverse()}
    //   </div>
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
