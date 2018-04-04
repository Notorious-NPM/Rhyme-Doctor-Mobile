import React from 'react';
import axios from 'axios';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

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
  }

  componentDidMount = () => {
    this.getRapPosts();
  }

  backToStart = () => {
    const context = this;
    context.setState({ displayLoopMsg: true });

    setTimeout(() => context.setState({ displayLoopMsg: false }), 2000);
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

  render() {
    const { rapPosts } = this.state;
    let pic = {
      uri: 'https://i.imgur.com/vWA2TAB.jpg'
    };

    return (
      <View style={styles.main}>
        <SessionBar nav={this.props} />
        <ScrollView
          indicatorStyle={'white'}
          maximumZoomScale={2.0}
          canCancelContentTouches={false}
        >
          <View>
            <Image source={pic} style={{ alignSelf: 'stretch', height: 200}}/>
          </View>
          {this.state.displayLoopMsg && <LoopMsg />}
          {rapPosts && 
            <SwipeCards
              containerStyle={{ flex: 1, width: '80%' }}
              cards={rapPosts}
              renderCard={(cardData, i) => 
                <RapPostEntry  
                  nav={this.props}
                  rapPost={cardData}
                  key={i}
                  getRapPosts={this.getRapPosts}
                  username={this.state.username}/>}
              showYup={false}
              showNope={false}
              loop={true}
              onLoop={this.backToStart}
              // handleNope={renderCard}
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