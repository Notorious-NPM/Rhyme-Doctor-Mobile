import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { registerRootComponent } from 'expo';
import SessionBar from './src/components/navbar/SessionBar';

import FriendChat from './src/components/buttons/FriendChat';

export default class App extends React.Component {
  componentDidMount() {
    
  }
  render() {
    let pic = {
      uri: 'https://i.imgur.com/vWA2TAB.jpg'
    };
    return (
      <View style={styles.container}>
        <SessionBar />
          <View style={styles.image}>
            <Image source={pic} style={{alignSelf: 'stretch', height: 200}}/>
          </View>
        <Text style={{color:'white', textAlign:'center', paddingTop: 10, paddingBottom: 10}}>Compose as you normally would. But be aware: commas signify a word to be rhymed with, as does the end of a line.</Text>
        <TextInput
          style={{height: 150, width: 300, alignSelf: 'center', backgroundColor: '#D7D7D7', borderColor: 'gray', borderWidth: 1}}
          placeholder="Type here..."
          placeholderTextColor="#333"
        // onChangeText={(text) => this.setState({text})}
        // value={this.state.text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              // onPress={onPressLearnMore}
              title="Post"
              color="#333"
              // accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.button}>
            <Button
              // onPress={onPressLearnMore}
              title="Hit API"
              color="#333"
              // accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
        <FriendChat />
        
      </View>
    );
  }
}

{/* // // const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#98E1DB',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// }); */}

var styles = StyleSheet.create({
  button: {
    margin: 10,
    borderColor: '#D7D7D7',
    borderWidth: 1
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#333',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});

registerRootComponent(App);
AppRegistry.registerComponent('SessionBar', () => App);