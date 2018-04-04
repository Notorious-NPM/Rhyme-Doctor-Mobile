import { StyleSheet, Platform } from 'react-native';

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
      },
      text: {
        textAlign: 'center',
        fontSize: 25,
        color: '#D7D7D7',
      },
      underlineText: {
        textAlign: 'center',
        fontSize: 30,
        color: '#D7D7D7',
        fontWeight: '700',
        textDecorationLine: 'underline',
        fontFamily: 'Didot-Bold',
      },
      contributor: {
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: 'white',
        padding: 15,
        margin: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'white',
        shadowOpacity: 1.0,
      },
      techTitle: {
        backgroundColor: 'midnightblue',
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        textShadowColor: 'black',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 4,
      },
      techHeader: {
        backgroundColor: 'midnightblue',
        marginTop: 50,
      },
      techRow: {
        backgroundColor: 'midnightblue',
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      techRow2: {
        backgroundColor: 'midnightblue',
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 300,
        height: 300,
      },
      svg: {
        margin: 5,
        width: 50,
        height: 50,
      },
    },
    android: {
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      view: {
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 30,
      },
      text: {
        textAlign: 'center',
        fontSize: 30,
        color: '#D7D7D7',
      },
      underlineText: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 30,
        color: '#D7D7D7',
      },
      contributor: {
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: 'white',
        padding: 15,
        margin: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'white',
        shadowOpacity: 1.0,
      },
      techTitle: {
        backgroundColor: 'midnightblue',
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        textShadowColor: 'black',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 4,
      },
      techHeader: {
        backgroundColor: 'midnightblue',
        marginTop: 50,
      },
      techRow: {
        backgroundColor: 'midnightblue',
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      techRow2: {
        backgroundColor: 'midnightblue',
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 300,
        height: 300,
      },
      svg: {
        margin: 5,
        width: 50,
        height: 50,
      },
    }
  })
})

export default styles;
