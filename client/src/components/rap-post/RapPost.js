import React from 'react';
import axios from 'axios';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { LinearGradient } from 'expo';

import store from '../../redux/store.js';
import RapPostEntry from './RapPostEntry';
import SessionBar from '../navbar/SessionBar';
import Loading from './Loading';
import LoopMsg from './LoopMsg';

import styles from './RapPostCss';
import { location, port } from '../../../../config';

class RapPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.state = store.getState();
    });
    this.state.scrollable = true;
  }

  componentDidMount = () => {
    this.getRapPosts();
  }

  backToStart = () => {
    const context = this;
    context.setState({ displayLoopMsg: true });

    setTimeout(() => context.setState({ displayLoopMsg: false }), 5000);
  }

  getRapPosts = async () => {
    this.props.navigation.state.params
    try {
      let url = `https://${location}:${port}/api/content/posts`;
      if (this.props.navigation.state.params && this.props.navigation.state.params.subscription === 1) {
        url = `https://${location}:${port}/api/content/friendsPosts`;
      }
      const rapPosts = await axios.get(url);
      this.setState({
        rapPosts: rapPosts.data,
      });
    } catch (err) {
      alert('Failed to get rap posts.');
    }
  }

  // disableScroll = () => {
  //   this.setState({ scrollable: false })
  // }
  changeScroll = () => {
    this.setState({ scrollable: !this.state.scrollable });
  }

  render() {
    const { scrollable, rapPosts } = this.state;
    let pic = {
      uri: 'https://i.imgur.com/vWA2TAB.jpg'
    };

    return (
      <View style={styles.main}>
        <SessionBar nav={this.props} />
        <ScrollView
          scrollEnabled={scrollable}
          indicatorStyle={'white'}
          maximumZoomScale={2.0}
        >
          <View>
            <Image source={pic} style={{ alignSelf: 'stretch', height: 200}}/>
          </View>
          {this.state.displayLoopMsg && <LoopMsg />}
          <TouchableOpacity onPress={this.changeScroll} style={styles.scrollContainer}>
            <LinearGradient 
              colors={['#FEFCEA', '#FFFFAD', '#FFFF64', '#FFFFAD']} 
              locations={[0, 0.12, 0.38, 0.71]}
              style={styles.scrollButton}
            >
              <Text style={styles.scrollText}>
                {scrollable ? 's  c  r  o  l  l    m  o  d  e' : 's  w  i  p  e    m  o  d  e'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          {rapPosts && 
            <SwipeCards
              containerStyle={{ flex: 1, width: '80%', zIndex: 4 }}
              cards={rapPosts}
              onClickHandler={() => 'do nothing'}
              renderCard={(cardData) =>
                <RapPostEntry  
                  nav={this.props}
                  rapPost={cardData}
                  key={(Math.random() * 100000).toString()}
                  getRapPosts={this.getRapPosts}
                  username={this.state.username}/>
              }
              showYup={false}
              showNope={false}
              loop={true}
              onLoop={this.backToStart}
              dragY={true}
            />}
        </ScrollView>
      </View>
    )
  }
}

export default RapPost;

//  {/* <ScrollView>
//             <View>
//               <Image source={pic} style={{ alignSelf: 'stretch', height: 200}}/>
//             </View>
//             <View style={styles.view}>
//             {rapPosts.map((rapPost, i) => (<RapPostEntry
//               nav={this.props}
//               rapPost={rapPost}
//               key={i}
//               getRapPosts={this.getRapPosts}
//               username={this.state.username}
//             />))}
//             </View>
//           </ScrollView> */}