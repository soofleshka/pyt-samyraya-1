import React from "react";
import styles from "./AddNews.module.css";
import { Form, Formik } from "formik";
import { required } from "../../../../common/formsValidations/formsValidations";
import CommonFormElement from "../../../../common/CommonFormElement/CommonFormElement";

const AddNewsForm = (props) => {
  const handleSubmit = (values, { resetForm }) => {
    props.addNews(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        newNewsTitle: "",
        newNewsBody: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.addNews}>
        <h3>Add new news</h3>
        <div>
          <label>Title</label>
          <CommonFormElement
            Element="input"
            name="newNewsTitle"
            type="text"
            validate={required}
          />
        </div>
        <div>
          <label>Body</label>
          <CommonFormElement
            Element="textarea"
            name="newNewsBody"
            component="textarea"
            validate={required}
          />
        </div>
        <button>Add news</button>
      </Form>
    </Formik>
  );
};
export default AddNewsForm;
