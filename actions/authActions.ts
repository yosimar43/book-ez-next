import { firebaseGetUser } from "../firebase/firebaseAuth";
import { NEW_LOGIN } from "../types/authTypes";

export const authUserAction = (userCredentials: any): object => {
  return async (dispatch: any) => {
    try {
      const getUserCredentials = await firebaseGetUser(
        userCredentials.email,
        userCredentials.password
      );
      dispatch(authUser({ getUserCredentials }));
    } catch (error) {
      dispatch(authUser(null));
    }
  };
};

const authUser = (userCredentials: any): object => ({
  type: NEW_LOGIN,
  payload: userCredentials,
});
