import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const friends = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#bbb',
    borderRadius: 100,
    margin: 8,
    position: 'relative',
    top: 10,

  },
  name: {
    color: 'white',
    fontSize: 40,
  },
  list: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});

export default FriendList;
