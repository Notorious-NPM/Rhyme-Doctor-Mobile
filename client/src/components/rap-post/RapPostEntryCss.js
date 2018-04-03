import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        borderRadius: 5,
        flex: 1,
        marginBottom: 20,
        backgroundColor: '#91A3B0',
        paddingTop: 20,
        padding: 20,
      },
      likeButton: {
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: 85,
        height: 45,
      },
      likeButtonGradient: {
        borderRadius: 5,
        width: 83,
        height: 43,
        borderColor: 'white',
        borderWidth: 1,
        overflow: 'hidden',
      },
      buttonMain: {
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 5,
      },
      likeNum: {
        fontSize: 15,
        fontWeight: '600',
      },
      likeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
      },
      likeNumContainer: {
        backgroundColor: 'white',
        borderRadius: 3,
        width: 20,
        height: 20,
        marginTop: 3,
        marginLeft: 5,
        alignItems: 'center',
      },
      likeTopContainer: {
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
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
      },
      commentButton: {
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: 103,
        height: 45,
      },
      commentsText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
      },
      commentTopContainer: {
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
      },
      rapTextInner: {
        paddingRight: 10,
        paddingLeft: 10,
      },
      rapTextOuter: {
        backgroundColor: 'white',
      },
      reportButton: {
        alignItems: 'center',
        backgroundColor: '#ffc107',
        height: 20,
        width: 90,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
      },
      reportText: {
        marginTop: 1,
        fontSize: 14,
        fontWeight: '700',
      },
      userMain: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
      },
      username: {
        fontSize: 25,
        fontWeight: '800',
      },
      usernameLink: {
        textDecorationLine: 'underline'
      }
    },
    android: {
      main: {
        borderRadius: 5,
        flex: 1,
        marginBottom: 20,
        backgroundColor: '#91A3B0',
        paddingTop: 20,
        padding: 20,
      },
      likeButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        borderWidth: 1,
        width: 85,
        height: 45,
      },
      buttonMain: {
        alignItems: 'center',
        marginTop: 20,
      },
      likeNum:{
        fontSize: 15,
        fontWeight: '600',
      },
      likeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
      },
      likeNumContainer: {
        backgroundColor: 'white',
        borderRadius: 3,
        width: 20,
        height: 20,
        marginTop: 3,
        marginLeft: 5,
        alignItems: 'center',
      },
      likeTopContainer: {
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'row',
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
      },
      commentButton: {
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: 103,
        height: 45,
      },
      commentsText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
      },
      commentTopContainer: {
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
      },
      rapTextInner: {
        paddingRight: 10,
        paddingLeft: 10,
      },
      rapTextOuter: {
        backgroundColor: 'white',
      },
      reportButton: {
        alignItems: 'center',
        backgroundColor: '#ffc107',
        height: 20,
        width: 90,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
      },
      reportText: {
        marginTop: 1,
        fontSize: 14,
        fontWeight: '700',
      },
      userMain: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
      },
      username: {
        fontSize: 25,
        fontWeight: '800',
      },
      usernameLink: {
        textDecorationLine: 'underline'
      }
    }
  })
})

export default styles;