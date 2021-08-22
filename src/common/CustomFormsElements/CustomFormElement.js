import React from "react";
import styles from "./CustomFormElement.module.css";

export const CustomFormElement = ({ input, meta, placeholder, Element }) => {
  return (
    <div>
      <Element {...input} placeholder={placeholder} />
      {meta.error && meta.touched && (
        <span className={styles.error}>{meta.error}</span>
      )}
    </div>
  );
};
