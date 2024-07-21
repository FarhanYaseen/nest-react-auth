import axios from "axios";

interface SignupValues {
  email: string;
  name: string;
  password: string;
}
export const signup = async (values: SignupValues): Promise<void> => {
  return await axios.post("http://localhost:3010/auth/signup", values);
};

interface SigninValues {
  email: string;
  password: string;
}

export const signin = async (values: SigninValues): Promise<void> => {
  return await axios.post("http://localhost:3010/auth/signin", values);
};
