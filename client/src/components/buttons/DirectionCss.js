import { Platform, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        marginBottom: 10, 
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
      },
      text: {
        fontSize: 15
      }
    },
    android: {
      main: {
        marginBottom: 10, 
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
      },
      text: {
        fontSize: 15
      }
    }
  })
})