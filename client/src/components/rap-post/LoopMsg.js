import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default LoopMsg = () => (
  <View style={styles.main}>
    <Text>
      You have reached the end so we brought you back to the beginning
    </Text>
  </View>
)

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        backgroundColor: '#D1D1D1',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
      }
    },
    android: {

    }
  })

})