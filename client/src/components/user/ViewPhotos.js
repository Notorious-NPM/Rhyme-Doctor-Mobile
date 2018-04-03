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
      modalVisible: this.props.modalVisible,
    };
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    })
    this.props.hideModal();
  }

  render() {
    return (
      <View style={{margin:30}}>
        <Modal
          transparent={false}
          style={{backgroundColor: '#91A3B0'}}
          animationType="slide"
          presentationStyle="pageSheet"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{backgroundColor: '#333'}}>
          <TouchableHighlight
            style={{ marginTop: 10, width: 120,
              height: 30,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#D7D7D7',
              borderWidth: 1}}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <Text style={{fontSize: 16, alignSelf: 'center', fontWeight: 'bold', color: 'white'}}>CANCEL</Text>
          </TouchableHighlight>
          <ScrollView style= {{margin: 30}}>{this.props.photos.map((p, i) => {
            return(
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 300,
                  marginTop: 10,
                  borderColor: 'white',
                  borderWidth: 2
                }}
                source={{ uri: p.node.image.uri }}
              />
            )
          })}
          </ScrollView>
          </View>
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