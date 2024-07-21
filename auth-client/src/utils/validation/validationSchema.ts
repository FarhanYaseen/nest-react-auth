import * as Yup from "yup";

const passwordRequirements =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
const emailRequirements = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const signupValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailRequirements, "Invalid email address")
    .required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      passwordRequirements,
      "Password must contain at least 1 letter, 1 number, and 1 special character"
    )
    .required("Required"),
});

export const signinValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailRequirements, "Invalid email address")
    .required("Required"),
  password: Yup.string().required("Required"),
});
