import React from 'react';
import { Text, View } from 'react-native';
// import './comment.css';
import styles from './CommentCss';


const Comments = (props) => {
  return (
    <View style={styles.main}>
      {
        props.comments.map((comment, index) =>
          <View style={styles.comment} key={index}>
            <Text>
              {comment.name}
            </Text>
            <Text>
              {comment.text}
            </Text>
          </View>)
      }
    </View>)
};
  //   <div className="comments">
  //     {props.comments.map((comment, index) => (
  //       <div className="comments-list">
  //         <div className="media">
  //           {/* <a className="media-left" href="#">
  //             <img src="http://lorempixel.com/40/40/people/1/" />
  //           </a> */}
  //           <div className="media-body">

  //             <h4 className="media-heading user_name">{comment.name}</h4>
  //             {comment.text}
  //             <p><small><a href="#">Like</a></small></p>
  //           </div>
  //         </div>
  //       </div>))}

  //   </div>
  // );

export default Comments;
