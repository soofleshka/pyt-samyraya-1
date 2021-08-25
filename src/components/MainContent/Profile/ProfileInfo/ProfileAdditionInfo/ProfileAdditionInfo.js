import React, { useState } from "react";
import { Field, FieldArray, Form, Formik } from "formik";
import styles from "./ProfileAdditionInfo.module.css";
import {
  convertToFullUrl,
  convertToShortUrl,
} from "../../../../../utils/utils";

export const ProfileAdditionInfo = (props) => {
  const [additionInfoEditMode, setAdditionInfoEditMode] = useState(false);

  const toggleEditAdditionInfo = () => {
    setAdditionInfoEditMode(!additionInfoEditMode);
  };

  const profileAdditionInfoChangeHandler = (values, { setStatus }) => {
    props.changeProfileAdditionInfo(values).then((errors) => {
      if (errors) setStatus({ serverErrors: errors });
      else toggleEditAdditionInfo();
    });
  };
  const editAdditionInfoToggleHandler = () => {
    toggleEditAdditionInfo();
  };

  const { isMyProfile, profile } = props;
  return (
    <div>
      <h3>
        Addition Info
        {isMyProfile && (
          <span
            onClick={editAdditionInfoToggleHandler}
            className={styles.editButton}
          >
            Edit
          </span>
        )}
      </h3>
      <div>
        {additionInfoEditMode ? (
          <Formik
            initialValues={{
              aboutMe: profile.aboutMe || "",
              contacts: profile.contacts,
              lookingForAJob: profile.lookingForAJob || "",
              lookingForAJobDescription:
                profile.lookingForAJobDescription || "",
              fullName: profile.fullName || "",
            }}
            onSubmit={profileAdditionInfoChangeHandler}
          >
            {({ values, status }) => (
              <Form>
                <div>
                  {status &&
                    status.serverErrors &&
                    status.serverErrors.map((se, index) => (
                      <span key={index} className="error">
                        {se}
                      </span>
                    ))}
                </div>
                <div>
                  <label htmlFor="aboutMe">About me:</label>
                  <Field id="aboutMe" name="aboutMe" />
                </div>
                <label htmlFor="contacts">
                  <h3>Contacts:</h3>
                </label>
                <FieldArray
                  id="contacts"
                  name="contacts"
                  render={() => {
                    return (
                      <div>
                        {Object.keys(values.contacts).map((contact, index) => (
                          <div key={index}>
                            <label>{contact}:</label>
                            <Field name={`contacts.${contact}`} />
                          </div>
                        ))}
                      </div>
                    );
                  }}
                />
                <div>
                  <label htmlFor="lookingForAJob">lookingForAJob:</label>
                  <Field
                    id="lookingForAJob"
                    name="lookingForAJob"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label htmlFor="lookingForAJobDescription">
                    lookingForAJobDescription:
                  </label>
                  <Field
                    id="lookingForAJobDescription"
                    name="lookingForAJobDescription"
                  />
                </div>
                <div>
                  <label htmlFor="fullName">fullName:</label>
                  <Field id="fullName" name="fullName" />
                </div>
                <button type="submit">Save</button>
              </Form>
            )}
          </Formik>
        ) : (
          <>
            <p>{profile.aboutMe}</p>
            <div>
              <h3>Contacts</h3>
              {Object.entries(profile.contacts).map((contact, index) => {
                return contact[1] ? (
                  <div key={index}>
                    {contact[0]}:{" "}
                    <a
                      href={convertToFullUrl(contact[1])}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {convertToShortUrl(contact[1])}
                    </a>
                  </div>
                ) : null;
              })}
            </div>
            {profile.lookingForAJob && (
              <div>
                <p>Looking for a Job</p>
                <p>{profile.lookingForAJobDescription}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
