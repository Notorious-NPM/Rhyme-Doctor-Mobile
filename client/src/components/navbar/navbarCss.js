import { Platform, StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      menuText: {
        fontSize: 20
      },
      bottomRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        marginLeft: '10%'
      }
    },
    android: {
      menuText: {
        fontSize: 20
      },
      bottomRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        marginLeft: '10%'
      }
    }
  })
})

export default styles;