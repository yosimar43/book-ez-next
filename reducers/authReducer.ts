import { LOGIN_OUT, NEW_LOGIN } from "../types/authTypes";

const defaultState: {
  getUserCredentials: object | null;
} = {
  getUserCredentials: null,
};

const authReducer = (
  state = defaultState,
  action: { type: string; payload?: object }
) => {
  switch (action.type) {
    case NEW_LOGIN:
      return action.payload;

    case LOGIN_OUT: {
      return { userCredentials: null };
    }

    default:
      return state;
  }
};

export default authReducer;
