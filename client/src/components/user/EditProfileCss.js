import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      button: {
        marginTop: 15,
        width: 150,
        height: 30,
        alignSelf: 'center',
        borderColor: '#D7D7D7',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      container: {
        flex: 1,
        backgroundColor: '#333',
      },
      innerContainer : {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      bio: {
        flex: 1,
        marginTop: 5,
        alignSelf: 'center'
      }
    },
    android: {
      button: {
        marginTop: 15,
        width: 150,
        height: 30,
        alignSelf: 'center',
        borderColor: '#D7D7D7',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      container: {
        flex: 1,
        backgroundColor: '#333',
      },
      innerContainer : {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      bio: {
        flex: 1,
        marginTop: 5,
        // flexDirection: 'column',
        alignSelf: 'center'
      }
    }
  })
});

export default styles;