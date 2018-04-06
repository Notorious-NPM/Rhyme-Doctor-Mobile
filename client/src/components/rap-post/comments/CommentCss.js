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
        borderColor: '#333',
        borderWidth: 1,
      },
      commentButtonMain: {
        alignItems: 'center',
        marginTop: 7,
        borderRadius: 5,
      },
      commentButtonGradient: {
        borderRadius: 5,
        width: 101,
        height: 43,
        borderColor: 'white',
        borderWidth: 1,
        overflow: 'hidden',
        alignItems: 'center',
      },
      commentButton: {
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: 103,
        height: 45,
      },
      commentText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
      },
      commentTopContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
      },
      commentsPopShow: {
        position: 'absolute',
        width: '100%',
        bottom: 150,
        left: 0,
        backgroundColor: 'white',
      },
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
        borderColor: '#333',
        borderWidth: 1,
      },
      commentButtonMain: {
        alignItems: 'center',
        marginTop: 7,
        borderRadius: 5,
      },
      commentButtonGradient: {
        borderRadius: 5,
        width: 101,
        height: 43,
        borderColor: 'white',
        borderWidth: 1,
        overflow: 'hidden',
        alignItems: 'center',
      },
      commentButton: {
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: 103,
        height: 45,
      },
      commentText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
      },
      commentTopContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
      },
      commentsPopShow: {
        position: 'absolute',
        width: '100%',
        bottom: 220,
        left: 0,
        backgroundColor: 'white',
      },
    }
  })
})

export default styles;
