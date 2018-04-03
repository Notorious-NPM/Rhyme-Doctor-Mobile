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
        paddingBottom: 10,
        borderBottomColor: '#333',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      name: {
        fontWeight: '700',
        paddingBottom: 3,
      },
      inputBox: {
        height: 100,
        width: '100%',
        // borderColor: '#333',
        // borderWidth: 1,
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
        paddingBottom: 10,
        borderBottomColor: '#333',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      name: {
        fontWeight: '700',
        paddingBottom: 3,
      },
      inputBox: {
        height: 100,
        width: '100%',
        // borderColor: '#333',
        // borderWidth: 1,
      }
    }
  })
})

export default styles;
