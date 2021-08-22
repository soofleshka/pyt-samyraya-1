import React from "react";
import { Field, Form } from "react-final-form";
import { defaultRequired } from "../../../../../../utils/validators";
import styles from "./AddPost.module.css";

const AddPostForm = (props) => {
  return (
    <Form onSubmit={props.addPost}>
      {({ handleSubmit, form }) => {
        return (
          <form
            onSubmit={(event) => {
              handleSubmit(event);
              form.restart();
            }}
            className={styles.addPost}
          >
            <Field
              name="newPostText"
              validate={defaultRequired}
              component="textarea"
              placeholder="Введите пост"
            />
            <button className={styles.addPost__button}>Add post</button>
          </form>
        );
      }}
    </Form>
  );
};

export default AddPostForm;

// const AddPost = ({ newPostText, addPost, changeNewPostText }) => {
//   let addPostHandler = () => {
//     addPost();
//   };
//
//   let changeNewPostTextHandler = (e) => {
//     changeNewPostText(e.target.value);
//   };
//
//   return (
//     <div className={styles.addPost}>
//       <textarea onChange={changeNewPostTextHandler} value={newPostText} />
//       <button onClick={addPostHandler} className={styles.addPost__button}>
//         Add post
//       </button>
//     </div>
//   );
// };
