import type {
  LoginMessageError,
  LoginRegex,
} from "../components/types/LoginFormTypes";

export const MESSAGE_ERROR: LoginMessageError = {
  email: "Email error",
  password: "Password error",
};

export const REGEX: LoginRegex = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@$!%*?&]{8,}$/,
};
