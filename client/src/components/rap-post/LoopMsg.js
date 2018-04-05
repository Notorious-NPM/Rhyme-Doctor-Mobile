import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default LoopMsg = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <View style={styles.main}>
      <Text style={styles.text}>You have reached the end</Text>
      <Text style={styles.text}>visit https://rhymedoctor.fun for more fun!</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        backgroundColor: 'rgba(168, 168, 168, 0.2)',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
      },
      text: {
        fontWeight: '800',
        color: '#E6E4E4'
      }
    },
    android: {
      main: {
        backgroundColor: 'rgba(168, 168, 168, 0.2)',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
      },
      text: {
        fontWeight: '800',
        color: '#E6E4E4'
      }
    }
  })

})