import type { Dispatch } from "redux";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/appConstant"
import type { AuthActionType } from "../type/authTypes";

export const login = (email: string, password: string) => {
  return (dispatch: Dispatch<AuthActionType>) => {
    dispatch({ type: LOGIN_REQUEST });
    setTimeout(() => {
      if (email === "admin@gmail.com" && password == "123456") {
        dispatch({ type: LOGIN_SUCCESS });
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: "Invalid credentials" });
      }
    }, 1000);
  };
};
