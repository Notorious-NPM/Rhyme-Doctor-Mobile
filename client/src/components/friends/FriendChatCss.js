import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      container: {
        backgroundColor: '#000000',
      },
      main: {
        backgroundColor: '#333',
      },
      title: {
        color: '#EADC5B', 
        fontSize: 50, 
        padding: 5,
      }
    },
    android: {
      container: {
        backgroundColor: '#000000',
      },
      main: {
        backgroundColor: '#333',
      }
    }
  })
});

const friends = StyleSheet.create({
  ...Platform.select({
    ios: {
      show: {
        display: 'flex',
      },
      hide: {
        display: 'none',
      },
      dot: {
        height: 10,
        width: 10,
        backgroundColor: '#bbb',
        borderRadius: 100,
        margin: 8,
        position: 'relative',
        top: 10,
    
      },
      name: {
        color: 'white',
        fontSize: 40,
      },
      list: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
      },
    },
    android: {
      show: {
        display: 'flex',
      },
      hide: {
        display: 'none',
      },
      dot: {
        height: 10,
        width: 10,
        backgroundColor: '#bbb',
        borderRadius: 100,
        margin: 8,
        position: 'relative',
        top: 10,
    
      },
      name: {
        color: 'white',
        fontSize: 40,
      },
      list: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
      },
    }
  })
});

export { friends, styles };