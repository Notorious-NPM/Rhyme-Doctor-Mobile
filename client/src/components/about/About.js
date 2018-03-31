import React from 'react';

import { Platform, StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import SessionBar from '../navbar/SessionBar';
// import './About.css';

const About = (props) => (
  <View style={styles.main}>
    <SessionBar nav={props}/>
    <ScrollView>
      <View style={styles.view}>
        <Text style={styles.text}>
          Welcome, and thank you for visiting our application!  We at Notorious NPM developed Rhyme
          Doctor as a tool to assist people, amateur and professional alike, to create the sickest
          lyrics and be able to share it with the world.  Simply type or paste your lyrics,
          click {'"Hit API"'}, and see the wonderful rhyme structure display before you.
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>
          Technical challenges/achievements
          We are proud to say that nothing like this has been realized before, especially not to the
          extent where people can visualize the rhyme schemes of their lyrics.  Our experienced staff
          here at Notorious NPM spent countless hours to deliver the elaborate architecture and
          algorithm of Rhyme Doctor that delivers rhythmic visualization at breakneck speeds.
          We hope that this tool will be of use to you and that you will enjoy your visit here!
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>
          Meet the staff of Notorious NPM
        </Text>
      </View>

      <View>
        <Image source={{uri: 'https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg'}}
        style={styles.image} />
        <Text style={styles.text}>
          Senior Software Engineer
          Eva Laskowski
        </Text>
      </View>

      <View>
        <Image source={{uri: 'https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg'}}
        style={styles.image} />
        <Text style={styles.text}>
          Senior Software Engineer
          James Yen
        </Text>
      </View>

      <View>
        <Image source={{uri: 'https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg'}}
        style={styles.image} />
        <Text style={styles.text}>
          Senior Software Engineer
          Kin Chan
        </Text>
      </View>

      <View>
        <Image source={{uri: 'https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg'}}
        style={styles.image} />
        <Text style={styles.text}>
          Senior Software Engineer
          Samuel Hong
        </Text>
      </View>

    </ScrollView>
  </View>

  // <div className="aboutTop">
  //   <div className="whitespace" />
  //   <div className="goal">
  //     Welcome, and thank you for visiting our application!  We at Notorious NPM developed Rhyme
  //     Doctor as a tool to assist people, amateur and professional alike, to create the sickest
  //     lyrics and be able to share it with the world.  Simply type or paste your lyrics,
  //     click {'"Hit API"'}, and see the wonderful rhyme structure display before you.
  //   </div>
  //   <div className="whitespace" />
  //   <div className="challenges">
  //     <h6>Technical challenges/achievements</h6>
  //     We are proud to say that nothing like this has been realized before, especially not to the
  //     extent where people can visualize the rhyme schemes of their lyrics.  Our experienced staff
  //     here at Notorious NPM spent countless hours to deliver the elaborate architecture and
  //     algorithm of Rhyme Doctor that delivers rhythmic visualization at breakneck speeds.
  //     We hope that this tool will be of use to you and that you will enjoy your visit here!
  //   </div>
  //   <div className="whitespace" />
  //   Meet the staff of Notorious NPM
  //   <div className="contributors top">
  //     <div className="contributors container">
  //       <div className="contributor">
  //         <img src="https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg" alt="potato"/>
  //         <br />
  //         Senior Software Engineer
  //         <br />
  //         Eva Laskowski
  //       </div>
  //       <div className="contributor">
  //         <img src="https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg" alt="potato"/>
  //         <br />
  //         Senior Software Engineer
  //         <br />
  //         James Yen
  //       </div>
  //       <div className="contributor">
  //         <img src="https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg" alt="potato"/>
  //         <br />
  //         Senior Software Engineer
  //         <br />
  //         Kin Chan
  //       </div>
  //       <div className="contributor">
  //         <img src="https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg" alt="potato"/>
  //         <br />
  //         Senior Software Engineer
  //         <br />
  //         Samuel Hong
  //       </div>
  //     </div>
  //   </div>
  //   <div className="whitespace" />
  //   <div className="tech">
  //     <h4>Powered By</h4>
  //     <div className="images">
  //       <div className="image">
  //         <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="react" />
  //       </div>
  //       <div className="image">
  //         <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="redux" />
  //       </div>
  //       <div className="image router">
  //         <img src="https://cdn.worldvectorlogo.com/logos/react-router.svg" alt="reactRouter" />
  //       </div>
  //       <div className="image">
  //         <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="node" />
  //       </div>
  //       <div className="image">
  //         <img src="https://cdn.worldvectorlogo.com/logos/mysql-5.svg" alt="mySql" />
  //       </div>
  //       <div className="image">
  //         <img src="https://cdn.worldvectorlogo.com/logos/sequelize.svg" alt="sequelize" />
  //       </div>
  //       <div className="image wordsAPI">
  //         <p>WORDSAPI</p>
  //       </div>
  //       <div className="image">
  //         <img src="https://cdn.worldvectorlogo.com/logos/socket-io.svg" alt="socket" />
  //       </div>
  //       <div className="image">
  //         <img src="https://cdn.worldvectorlogo.com/logos/passport.svg" alt="passport" />
  //       </div>
  //       <div className="image">
  //         <img src="https://cdn.worldvectorlogo.com/logos/dropzone.svg" alt="dropzone" />
  //       </div>
  //       <div className="image cloudinary">
  //         <img src="https://res.cloudinary.com/demo/image/upload/e_shadow,x_13,y_13/cloudinary_icon.png" alt="cloudinary" />
  //       </div>
  //       <div className="image babel">
  //         <img src="https://cdn.worldvectorlogo.com/logos/babel-10.svg" alt="babel" />
  //       </div>
  //       <div className="image">
  //         <img src="https://cdn.worldvectorlogo.com/logos/aws-ec2.svg" alt="aws" />
  //       </div>
  //       <div className="image">
  //         <img src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" alt="webpack" />
  //       </div>
  //     </div>
  //   </div>
  //   <div>
  //     Made at <img className="hackreactor" src="https://media.glassdoor.com/sqll/843406/hack-reactor-squarelogo-1427844676793.png" alt="hackreactor" />
  //   </div>
  // </div>
);

export default About;

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      view: {
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 30,
      },
      text: {
        textAlign: 'center',
        fontSize: 30,
        color: '#D7D7D7',
      },
      image: {
        width: 300,
        height: 300,
        textAlign: 'center',
        margin: 1,
        // border: '5px solid white',
        padding: 15,
        // boxShadow: 2px 2px 10px white,
        lineHeight: 1.5,
      },
    },
    android: {
      main: {
        backgroundColor: '#333',
        flex: 1,
      },
      view: {
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 30,
      },
      text: {
        textAlign: 'center',
        fontSize: 30,
        color: '#D7D7D7',
      },
      image: {
        width: 300,
        height: 300,
        textAlign: 'center',
        margin: 1,
        // border: '5px solid white',
        padding: 15,
        // boxShadow: 2px 2px 10px white,
        lineHeight: 1.5,
      },
    }
  })

})