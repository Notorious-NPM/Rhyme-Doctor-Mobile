import { Platform, StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        height: 60, 
        paddingTop: 30, 
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
    },
    android: {
      menuText: {
        fontSize: 20,
      },
      bottomRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        marginLeft: '10%',
      }
    }
  })
})

export default styles;