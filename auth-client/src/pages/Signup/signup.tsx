import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../../components/Input/Input";
import { signup } from "../../services/authService";
import { signupValidationSchema } from "../../utils/validation/validationSchema";
import { AxiosError } from "axios";

interface SignupValues {
  email: string;
  name: string;
  password: string;
}

const Signup: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: SignupValues = {
    email: "",
    name: "",
    password: "",
  };

  const handleSubmit = async (
    values: SignupValues,
    { setSubmitting }: FormikHelpers<SignupValues>
  ) => {
    setApiError(null);
    try {
      await signup(values);
      login();
      navigate("/welcome");
    } catch (error) {
      const axiosError = error as AxiosError<{ error: string }>;
      console.error(
        "Failed to sign up. Please check your details.",
        axiosError
      );
      const errorMessage =
        axiosError.response?.data?.error ||
        "Failed to sign up. Please check your details.";
      setApiError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        {apiError && (
          <div className="mb-4 text-red-500 text-center">{apiError}</div>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={signupValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Email:</label>
                <Field
                  name="email"
                  as={Input}
                  type="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Name:</label>
                <Field
                  name="name"
                  as={Input}
                  type="text"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-1 font-semibold">Password:</label>
                <div className="relative">
                  <Field
                    name="password"
                    as={Input}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  {values.password && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  )}
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-200"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <Link
            to="/signin"
            className="inline-block mt-2 text-blue-500 hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
