import { Platform, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      close: {
        color: 'white',
        fontSize: 20,
      },
      closeContainer: {
        width: 80,
        backgroundColor: '#353535',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
      },
      chatHeader: {
        height: '8%',
        flexDirection: 'row',
      },
      friendNameContainer: {
        width: '75%',
        marginLeft: '5%',
      },
      friendNameText: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
      },
      main: {
        margin: '2%',
        height: Dimensions.get('window').height * .90,
        borderWidth: 1, 
        backgroundColor: 'black',
        width: '95%',
      },
      mobilePopShow: {
        position: 'absolute',
        width: '100%',
        top: '30%',
        left: 0,
      },
      chatDisplay: {
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: 10,
        width: '90%',
        height: '70%',
        backgroundColor: 'white',
      },
      chatText: {
        fontSize: 20,
        paddingTop: 1,
        color: 'black',
        paddingLeft: 5,
      },
      textInput: {
        height: 40,
        left: '7%', 
        right: '7%',
        borderWidth: 1,
        width: 300,
        backgroundColor: 'white',
        paddingRight: 10,
      },
      txtBubbleContainer:{
        flexWrap: 'wrap',
      },
      txtBubble: {
        borderRadius: 10,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        maxWidth: '90%',
      }
    }, 
    android: {
      close: {
        color: 'white',
        fontSize: 20,
      },
      closeContainer: {
        width: 80,
        backgroundColor: '#353535',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
      },
      chatHeader: {
        height: '8%',
        flexDirection: 'row',
      },
      friendNameContainer: {
        width: '75%',
        marginLeft: '5%',
      },
      friendNameText: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
      },
      main: {
        margin: '2%',
        height: Dimensions.get('window').height * .90,
        borderWidth: 1, 
        backgroundColor: 'black',
        width: '95%',
      },
      mobilePopShow: {
        position: 'absolute',
        width: '100%',
        top: '30%',
        left: 0,
      },
      chatDisplay: {
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: 10,
        width: '90%',
        height: '70%',
        backgroundColor: 'white',
      },
      chatText: {
        fontSize: 20,
        paddingTop: 1,
        color: 'black',
        paddingLeft: 5,
      },
      textInput: {
        height: 40,
        left: '7%', 
        right: '7%',
        borderWidth: 1,
        width: 300,
        backgroundColor: 'white',
        paddingRight: 10,
      },
      txtBubbleContainer:{
        flexWrap: 'wrap',
      },
      txtBubble: {
        borderRadius: 10,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        maxWidth: '90%',
      }
    }
  })
})

export default styles;