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
    }
  })
})

export default styles;