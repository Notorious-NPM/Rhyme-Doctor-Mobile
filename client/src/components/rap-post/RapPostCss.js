import { Platform, StyleSheet } from 'react-native'
import RapPost from './RapPost';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      view: {
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 30,
      }
    },
    android: { //fix styling for android
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      view: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
      }
    }
  })
})

export default styles;