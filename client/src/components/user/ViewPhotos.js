import React, {Component} from 'react';

import {
  Image,
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native';

export default class ViewPhotos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <ScrollView>{this.props.photos.map((p, i) => {
      return(
        <Image
          key={i}
          style={{
            width: 300,
            height: 100
          }}
          source={{ uri: p.node.image.uri }}
        />
      )
    })}</ScrollView>
  }
}

// return (
//   <View>
//     <Text>{this.props.photos === undefined ? null : this.props.photos.length}</Text>
//   </View>
// )
//   return ({<ScrollView>
//     {this.props.photos === undefined 
//       ? null 
//       : this.props.photos.map((p, i) => {
//         <Image
//           key={i}
//           style={{
//             width: 300,
//             height: 100
//           }}
//           source={{ uri: p.node.image.uri }}
//         />
//       })}
//   </ScrollView>)
// }