export interface LoginMessageError {
  email: string;
  password: string;
}

export interface LoginRegex {
  email: RegExp;
  password: RegExp;
}
