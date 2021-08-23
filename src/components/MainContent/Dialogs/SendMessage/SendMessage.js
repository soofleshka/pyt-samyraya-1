import React from "react";
import { Field, Form, Formik } from "formik";
import { MAX_INPUT_LENGTH } from "../../../../common/constants";
import { required } from "../../../../common/formsValidations/formsValidations";
import styles from "./SendMessage.module.css";

const SendMessageForm = (props) => {
  const handleSubmit = ({ newMessageText }, { resetForm }) => {
    props.sendMessage(newMessageText);
    resetForm();
  };

  return (
    <Formik initialValues={{ newMessageText: "" }} onSubmit={handleSubmit}>
      <Form className={styles.sendMessage}>
        <Field
          component="textarea"
          name="newMessageText"
          maxLength={MAX_INPUT_LENGTH}
          placeholder="Введите сообщение"
          validate={required}
        />
        <button className={styles.sendMessage__button}>Send Message</button>
      </Form>
    </Formik>
  );
};

export default SendMessageForm;
