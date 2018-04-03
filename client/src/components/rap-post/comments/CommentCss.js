import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        backgroundColor: 'white',
        flex: 1,
      },
      comment: {
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 10,
      }
    },
    android: { //fix styling for android
      main: {
        backgroundColor: 'white',
        flex: 1,
      },
      comment: {
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 10,
      }
    }
  })
})

export default styles;
