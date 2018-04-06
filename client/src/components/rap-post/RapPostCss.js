import { Platform, StyleSheet } from 'react-native'
import RapPost from './RapPost';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      directionContainer: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
      },
      view: {
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 30,
      },
      scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
      },
      scrollButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        width: '80%',
        borderRadius: 6,
      },
      scrollModal: {
        position: 'absolute',
        width: '100%',
        borderWidth: 1,
        borderColor: 'blue',
        zIndex: 5,
        left: 0,
      },
      scrollText: {
        fontSize: 10,
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
      },
      scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
      },
      scrollButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 10,
        width: '80%',
        borderRadius: 6,
      },
      scrollText: {
        fontSize: 10,
      }
    }
  })
})

export default styles;