import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      imageContainer: {
        backgroundColor: '#ffff64',
        width: 300,
        height: 300,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
      },
      main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      message: {
        fontSize: 25,
        fontWeight: '800',
        color: 'white',
        marginBottom: 60,
      }
    },
    android: {

    }
  })
})

export default styles;