import type { AuthActionType, AuthState } from "../type/authTypes";

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  error: null,
};
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/appConstant"

export const authReducer = (
  state = initialState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, isAuthenticated: true, error: null };
    case LOGIN_FAILURE:
      return { loading: false, isAuthenticated: false, error: action.payload };
    default:
      return state;
  }
};
