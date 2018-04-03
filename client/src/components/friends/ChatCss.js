import { Platform, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      close: {
        textAlign: 'right',
        marginRight: 5,
        color: 'white',
        fontSize: 20,
      },
      main: {
        margin: '2%',
        height: Dimensions.get('window').height * .87,
        borderWidth: 1, 
        backgroundColor: 'black',
        width: '95%',
      },
      mobilePopShow: {
        position: 'absolute',
        width: '100%',
        top: '48%',
        left: 0,
      },
      chatDisplay: {
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: 10,
        width: '90%',
        height: '80%',
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
      txtBubble:{
        backgroundColor: 'grey',
        borderRadius: 10,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        flex: 1,
        height: 30,
      },
    }, 
    android: {
      close: {
        textAlign: 'right',
        marginRight: 5,
        color: 'white',
        fontSize: 20,
      },
      main: {
        margin: '2%',
        height: Dimensions.get('window').height * .87,
        borderWidth: 1, 
        backgroundColor: 'black',
        width: '95%',
      },
      mobilePopShow: {
        position: 'absolute',
        width: '100%',
        top: '48%',
        left: 0,
      },
      chatDisplay: {
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: 10,
        width: '90%',
        height: '80%',
        backgroundColor: 'white',
      },
      chatText: {
        fontSize: 20,
        paddingBottom: 2,
        color: 'black',
      },
      textInput: {
        height: 40,
        left: '7%', 
        right: '7%',
        borderWidth: 1,
        width: 300,
        backgroundColor: 'white',
      },
      txtBubble:{
        backgroundColor: 'grey',
        borderRadius: 10,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        flex: 1,
      },
    }
  })
})

export default styles;