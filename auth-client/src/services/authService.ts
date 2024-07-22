import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL



interface SignupValues {
  email: string;
  name: string;
  password: string;
}

export const signup = async (values: SignupValues): Promise<void> => {
  return await axios.post(
    `${BASE_URL}/auth/signup`,
    values
  );
};

interface SigninValues {
  email: string;
  password: string;
}

export const signin = async (values: SigninValues): Promise<void> => {
  return await axios.post(
    `${BASE_URL}/auth/signin`,
    values
  );
};
