import { useField } from "formik";

const CommonFormElement = ({ Element, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Element {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </>
  );
};

export default CommonFormElement;
