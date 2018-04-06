import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      text: {
        color: 'white',
        fontSize: 16,
      },
      title: {
        fontWeight: '700',
        fontSize: 20,
      },
      wrapper: {
        paddingTop: 10,
        marginLeft: 10,
        marginRight: 10,
      },
      link: {
        color: '#00FFFF',
        textDecorationLine: 'underline',
      }
    },
    android: { //fix styling for android
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      text: {
        color: 'white',
      }
    }
  })
})

export default styles;
