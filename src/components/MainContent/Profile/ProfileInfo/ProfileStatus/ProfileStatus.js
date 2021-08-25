import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { MAX_INPUT_LENGTH } from "../../../../../common/constants";
import styles from "../ProfileInfo.module.css";

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
      <h3>Status</h3>
      {props.isMyProfile ? (
        <div className={styles.status}>
          {!statusEditMode ? (
            <div onDoubleClick={editStatusToggleHandler}>
              {
                <p className={styles.status}>
                  {props.profileStatus || "Введите статус"}
                </p>
              }
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
        <p className={styles.status}>{props.profileStatus}</p>
      )}
    </div>
  );
};
