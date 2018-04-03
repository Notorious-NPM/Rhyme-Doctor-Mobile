import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import styles from './CommentCss';


const Comments = (props) => {
  return (
    <View>
      <View style={styles.main}>
        {
          props.comments.map((comment, index) =>
            <View style={styles.comment} key={index}>
              <Text style={styles.name}>
                {comment.name}
              </Text>
              <Text>
                {comment.text}
              </Text>
            </View>)
        }
        <TextInput
          value={props.myComment}
          onChangeText={(text) => props.createComment(text)}
          style={styles.inputBox}
          multiline={true}
          numberOfLines={3}
          placeholder="Add a comment..."
        />
      </View>

      <View style={styles.commentButtonMain}>
        <TouchableOpacity style={styles.commentButton} onPress={() => props.postComment()}>
          <LinearGradient
            colors={['#D0E4F7', '#73B1E7', '#0A77D5', '#0A77D5', '#0A77D5', '#0A77D5', '#539FE1', '#539FE1', '#87BCF3']}
            locations={[0, 0.07, 0.17, 0.53, 0.53, 0.57, 0.89, 0.99, 1]}
            style={styles.commentButtonGradient}>
            <View style={styles.commentTopContainer}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.commentText}>Post</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>


      {/* <div className="row modal-row">
        <div className="form-container special-container">
          <div className="form-group">
            <TextInput value={props.myComment} onChange={(e) => props.createComment(e)} className="form-control special-control" rows="3" id="comment" placeholder="Add a comment..." />
            <button className="btn btn-primary btn-margin" onClick={() => props.postComment()}>Submit</button>
            <button type="button" className="btn btn-secondary btn-margin" data-dismiss="modal" onClick={() => props.triggerModal()}>Close</button>
          </div>
        </div>
      </div> */}

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
