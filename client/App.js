import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { registerRootComponent } from 'expo';

export default class App extends React.Component {
  componentDidMount() {
    
  }
  render() {
    let pic = {
      uri: 'https://i.imgur.com/vWA2TAB.jpg'
    };
    return (
      
      // <View style={styles.container}>
      //   {/* <Text>Whaddup People</Text> */}
        // <Image source={pic} style={{width: 300, height: 110}}/>
      //   {/* <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text> */}
      // </View>

      <View style={styles.container}>
        <View style={styles.toolbar}>
            <Text style={styles.toolbarButton}>Sign Up</Text>
            <Text style={styles.toolbarTitle}>Rhyme Doctor</Text>
            <Text style={styles.toolbarButton}>Login</Text>
        </View>
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
  },

  toolbar:{
    backgroundColor:'#ffff64',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'
},
toolbarButton:{
    width: 50,
    color:'#333',
    textAlign:'center'
},
toolbarTitle:{
    color:'#333',
    textAlign:'center',
    fontWeight:'bold',
    flex:1
}
});

registerRootComponent(App);