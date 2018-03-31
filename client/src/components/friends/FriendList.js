import React, { Component } from 'react';
import { Text, View } from 'react-native';

import friends from './FriendListCss';

const FriendList = ({friend, index, changeSelectedChat}) => {
  return (
    <View style={friends.list}>
      <View style={friends.dot} />
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
