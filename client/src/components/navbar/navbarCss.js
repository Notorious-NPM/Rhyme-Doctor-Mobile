import { Platform, StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        height: 40, 
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingRight: 10, 
        paddingLeft: 10, 
        flexDirection: 'row', 
        backgroundColor: '#ffff64',
      },
      menuIcon: {
        width: 20, 
        height: 20, 
        transform: [{rotateY: '180deg'}],
      },
      menuText: {
        fontSize: 20
      },
      bottomRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        marginLeft: '10%',
      },
      title: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Didot-Bold'
      },
      top: {
        height: 20,
        width: '100%',
        backgroundColor: '#FDFDB8',
      }
    },
    android: {
      main: {
        height: 40, 
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingRight: 10, 
        paddingLeft: 10, 
        flexDirection: 'row', 
        backgroundColor: '#ffff64',
      },
      menuIcon: {
        width: 75, 
        height: 75, 
        transform: [{rotateY: '180deg'}],
      },
      menuText: {
        fontSize: 20
      },
      bottomRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        marginLeft: '10%',
      },
      title: {
        fontSize: 20,
        fontWeight: '700',
      },
      top: {
        height: 20,
        width: '100%',
        backgroundColor: '#FDFDB8',
      }
    }
  })
})

export default styles;