import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useAuth } from "../../contexts/AuthContext";
import { signin } from "../../services/authService";
import { signinValidationSchema } from "../../utils/validation/validationSchema";
import Input from "../../components/Input/Input";
import { AxiosError } from "axios";

const Signin: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>
  ) => {
    setApiError(null);
    try {
      await signin(values);
      login();
      navigate("/welcome");
    } catch (error) {
      const axiosError = error as AxiosError<{ error: string }>;
      console.error(
        "Failed to sign in. Please check your credentials.",
        axiosError
      );
      const errorMessage =
        axiosError.response?.data?.error ||
        "Failed to sign in. Please check your credentials.";
      setApiError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        {apiError && (
          <div className="mb-4 text-red-500 text-center">{apiError}</div>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={signinValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
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
              <div className="mb-6">
                <label className="block mb-1 font-semibold">Password:</label>
                <Field
                  name="password"
                  as={Input}
                  type="password"
                  placeholder="Enter your password"
                />
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
                Sign In
              </button>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-6">
          <p className="text-gray-600">Don't have an account?</p>
          <Link
            to="/signup"
            className="inline-block mt-2 text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
