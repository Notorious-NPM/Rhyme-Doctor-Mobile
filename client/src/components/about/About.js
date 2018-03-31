import React from 'react';
import SVGImage from 'react-native-svg-image';

import { Platform, StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import SessionBar from '../navbar/SessionBar';
import styles from './AboutCss';

const About = (props) => (
  <View style={styles.main}>
    <SessionBar nav={props} />
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
        <Text style={styles.underlineText}>
          Technical challenges/achievements{'\n'}
        </Text>
        <Text style={styles.text}>
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

      <View style={styles.contributor}>
        <Image source={{ uri: 'https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg' }}
          style={styles.image} />
        <Text style={styles.text}>
          Senior Software Engineer
          Eva Laskowski
        </Text>
      </View>

      <View style={styles.contributor}>
        <Image source={{ uri: 'https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg' }}
          style={styles.image} />
        <Text style={styles.text}>
          Senior Software Engineer
          James Yen
        </Text>
      </View>

      <View style={styles.contributor}>
        <Image source={{ uri: 'https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg' }}
          style={styles.image} />
        <Text style={styles.text}>
          Senior Software Engineer
          Kin Chan
        </Text>
      </View>

      <View style={styles.contributor}>
        <Image source={{ uri: 'https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg' }}
          style={styles.image} />
        <Text style={styles.text}>
          Senior Software Engineer
          Samuel Hong
        </Text>
      </View>


      <View style={styles.techHeader}>
        <Text style={styles.techTitle}>
          Powered By
        </Text>
      </View>
      <View style={styles.techRow}>
        <SVGImage style={styles.svg}
          source={{ uri: 'https://cdn.worldvectorlogo.com/logos/react.svg' }} />
        <SVGImage style={styles.svg}
          source={{ uri: 'https://cdn.worldvectorlogo.com/logos/redux.svg' }} />
        <SVGImage style={styles.svg}
          source={{ uri: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' }} />
        <SVGImage style={styles.svg}
          source={{ uri: 'https://cdn.worldvectorlogo.com/logos/mysql-5.svg' }} />
        <SVGImage style={styles.svg}
          source={{ uri: 'https://cdn.worldvectorlogo.com/logos/socket-io.svg' }} />
        <SVGImage style={styles.svg}
          source={{ uri: 'https://cdn.worldvectorlogo.com/logos/passport.svg' }} />
      </View>
      <View style={styles.techRow2}>
      <SVGImage style={styles.svg}
          source={{ uri: 'https://cdn.worldvectorlogo.com/logos/dropzone.svg' }} />
        <SVGImage style={styles.svg}
          source={{ uri: 'https://res.cloudinary.com/demo/image/upload/e_shadow,x_13,y_13/cloudinary_icon.png' }} />
        <SVGImage style={styles.svg}
          source={{ uri: 'https://cdn.worldvectorlogo.com/logos/babel-10.svg' }} />
        <SVGImage style={styles.svg}
          source={{ uri: 'https://cdn.worldvectorlogo.com/logos/aws-ec2.svg' }} />
        <SVGImage style={styles.svg}
          source={{ uri: 'https://cdn.worldvectorlogo.com/logos/webpack-icon.svg' }} />
      </View>

    </ScrollView>
  </View>

);

export default About;
