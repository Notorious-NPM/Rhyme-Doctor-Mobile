import { Platform, StyleSheet } from 'react-native';

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

export default friends;