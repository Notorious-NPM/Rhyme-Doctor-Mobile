import React, {Component} from 'react';

import {
  Image,
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

export default class ViewPhotos extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<View>
      <Text>{this.props.photos === undefined ? null : this.props.photos}</Text>
    </View>)
  }
}