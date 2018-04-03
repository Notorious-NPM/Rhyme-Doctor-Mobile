import React, {Component} from 'react';

import {
  Image,
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  Modal
} from 'react-native';

export default class ViewPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: true,
    };
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    })
  }

  render() {
    return (
      <View style={{margin:30}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <TouchableHighlight
            style={{height: 20, marginTop: 10}}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <Text style={{fontSize: 16, alignSelf: 'center', fontWeight: 'bold'}}>Cancel</Text>
          </TouchableHighlight>
          <ScrollView style= {{margin: 30}}>{this.props.photos.map((p, i) => {
            return(
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 300,
                  marginTop: 10,
                }}
                source={{ uri: p.node.image.uri }}
              />
            )
          })}
          </ScrollView>
        </Modal>
      </View>
    )
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