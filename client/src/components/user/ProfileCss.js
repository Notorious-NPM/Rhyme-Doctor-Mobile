import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      container: {
        flex: 1,
        backgroundColor: '#333',
      },
      innerContainer : {
        margin: 10
      },
      image: {
        flexDirection: 'column'
      },
      bio: {
        flex: 1,
        marginTop: 5,
        flexDirection: 'column',
        alignSelf: 'center'
      },
      topContainer: {
        flexDirection: 'row'
      }
    },
    android: {
      container: {
        flex: 1,
        backgroundColor: '#333',
        // alignItems: 'center',
        // justifyContent: 'center'
      },
      innerContainer : {
        margin: 10
      },
      image: {
        flexDirection: 'column'
      },
      bio: {
        flex: 1,
        marginTop: 5,
        flexDirection: 'column',
        alignSelf: 'center'
      },
      topContainer: {
        flexDirection: 'row'
      }
    }
  })
});

export default styles;