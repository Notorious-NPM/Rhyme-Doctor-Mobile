import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './DirectionCss';

export default Direction = (props) => (
  <LinearGradient 
    colors={['#FEFCEA', '#FFFFAD', '#FFFF64', '#FFFFAD']} 
    locations={[0, 0.12, 0.38, 0.71]}
    style={styles.main}
  >
    <Text style={styles.text}>
      {props.direction}
    </Text>
  </LinearGradient>
)