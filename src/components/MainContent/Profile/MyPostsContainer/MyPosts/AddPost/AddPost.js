import React from "react";
import { Field, Form, Formik } from "formik";
import { MAX_INPUT_LENGTH } from "../../../../../../common/constants";
import styles from "./AddPost.module.css";
import { required } from "../../../../../../common/formsValidations/formsValidations";

const AddPostForm = (props) => {
  const handleSubmit = ({ newPostText }, { resetForm }) => {
    props.addPost(newPostText);
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        newPostText: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.addPost}>
        <Field
          component="textarea"
          name="newPostText"
          maxLength={MAX_INPUT_LENGTH}
          placeholder="Введите пост"
          validate={required}
        />
        <button className={styles.addPost__button}>AddPost</button>
      </Form>
    </Formik>
  );
};

export default AddPostForm;
