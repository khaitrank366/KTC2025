export interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/appConstant"

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export type AuthActionType =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
