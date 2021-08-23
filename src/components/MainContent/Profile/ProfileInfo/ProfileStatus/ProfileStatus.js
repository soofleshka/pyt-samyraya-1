import React, { useState } from "react";
import styles from "../ProfileInfo.module.css";
import { Field, Form, Formik } from "formik";
import { MAX_INPUT_LENGTH } from "../../../../../common/constants";

export const ProfileStatus = (props) => {
  const [statusEditMode, setStatusEditMode] = useState(false);

  const toggleEditStatus = () => {
    setStatusEditMode(!statusEditMode);
  };

  const profileStatusChangeHandler = ({ profileStatus }) => {
    props.changeProfileStatus(profileStatus);
    toggleEditStatus();
  };
  const editStatusToggleHandler = () => {
    toggleEditStatus();
  };

  return (
    <div>
      {props.isMyProfile ? (
        <div className={styles.status}>
          {!statusEditMode ? (
            <div onDoubleClick={editStatusToggleHandler}>
              {<p>{props.profileStatus || "Введите статус"}</p>}
            </div>
          ) : (
            <p>
              <Formik
                initialValues={{ profileStatus: props.profileStatus }}
                onSubmit={profileStatusChangeHandler}
              >
                {({ handleSubmit }) => (
                  <Form>
                    <Field
                      name="profileStatus"
                      autoFocus={true}
                      onBlur={handleSubmit}
                      maxLength={MAX_INPUT_LENGTH}
                    />
                  </Form>
                )}
              </Formik>
            </p>
          )}
        </div>
      ) : (
        <p>{props.profileStatus}</p>
      )}
    </div>
  );
};
