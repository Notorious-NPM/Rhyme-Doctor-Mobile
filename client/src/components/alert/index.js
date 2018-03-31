import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const Alert = (props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        backgroundColor: '#fff3cd',
        borderRadius: 5,
        height: 75,
        width: '100%',
        alignItems: 'center',
      },
      text: {
        color: '#856404',
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 25,
      }
    },
    android: {
      main: {
        backgroundColor: '#fff3cd',
        borderRadius: 5,
        height: 75,
        width: '100%',
        alignItems: 'center',
      },
      text: {
        color: '#856404',
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 25,
      }
    }
  })
})