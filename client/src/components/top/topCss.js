import { Platform, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      buttonContainer: {
        alignItems: 'center',
      },
      innerContainer: {
        borderWidth: 1,
        borderColor: 'white',
        width: 75,
        height: 30,
        alignItems: 'center',
      },
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      form: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
      },
      text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
      },
    },
    android: {
      buttonContainer: {
        alignItems: 'center',
      },
      innerContainer: {
        borderWidth: 1,
        borderColor: 'white',
        width: 75,
        height: 30,
        alignItems: 'center',
      },
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      form: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
      },
      text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
      },
    }
  })
})

export default styles;