import React from "react";
import { Field, Form } from "react-final-form";
import { defaultRequired } from "../../../../utils/validators";
import { CustomFormElement } from "../../../../common/CustomFormsElements/CustomFormElement";
import styles from "./AddNews.module.css";

const AddNewsForm = ({ addNewsClick }) => {
  return (
    <Form onSubmit={addNewsClick}>
      {({ handleSubmit, form }) => (
        <form
          onSubmit={(event) => {
            handleSubmit(event);
            form.restart();
          }}
        >
          <div>
            <label>Title</label>
            <Field
              name="newNewsTitle"
              component={CustomFormElement}
              Element="textarea"
              validate={defaultRequired}
            />
          </div>
          <div>
            <label>Body</label>
            <Field
              name="newNewsBody"
              component={CustomFormElement}
              Element="textarea"
              validate={defaultRequired}
            />
          </div>
          <button>Add news</button>
        </form>
      )}
    </Form>
  );
};

export const AddNews = (props) => {
  return (
    <div className={styles.addNews}>
      <h3>Add new news</h3>
      <AddNewsForm {...props} />
    </div>
  );
};
