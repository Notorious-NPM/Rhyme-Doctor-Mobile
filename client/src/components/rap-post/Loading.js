import React from 'react';
import { Animated, Image, Easing, Text, View } from 'react-native';

import styles from './LoadingCss';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin = () => {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(()=> this.spin());
  }


  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.main}>
        <Text style={styles.message}>Fetching the sickest rhymes</Text>
        <View style={styles.imageContainer}>
          <Animated.Image
            style={{
              width: 220,
              height: 250,
              transform: [{rotate: spin}] }}
            source={{uri: 'https://cdn.pixabay.com/photo/2016/03/31/20/52/fight-1296057__340.png'}}
            />
        </View>
      </View>
    )
  } 
}

export default Loading;