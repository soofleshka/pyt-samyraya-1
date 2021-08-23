import * as Yup from "yup";

export function required(value) {
  let error;
  if (!value) {
    error = "Required";
    return error;
  }
}

export const loginValidationScheme = Yup.object({
  email: Yup.string().email("Invalid email addresss").required("Required"),
  password: Yup.string().required("Required"),
});
