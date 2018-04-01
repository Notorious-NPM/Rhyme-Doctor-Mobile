import React, { Component } from 'react';
import { Text, View } from 'react-native';

import friends from './FriendListCss';

const FriendList = ({friend, dot, index, changeSelectedChat}) => {
  //component will receive props

  return (
    <View style={friends.list}>
      <View style={[friends.dot, { backgroundColor: dot }]} />
      <Text
        key={index}
        style={friends.name}
        onPress={() => changeSelectedChat(index)}
      >
        {friend[0]}
      </Text>
    </View>
  )
}

export default FriendList;
