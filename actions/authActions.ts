import { toast } from "react-toastify";
import { firebaseGetUser } from "../firebase/firebaseAuth";
import { NEW_LOGIN, LOGIN_OUT } from "../types/authTypes";

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
      toast.dismiss();

      toast.error("El correo o la contraseña son invalidas", {
        position: "top-center",
        theme: "light",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
};

const authUser = (userCredentials: any): object => ({
  type: NEW_LOGIN,
  payload: userCredentials,
});

export const logOutAction = () => {
  return (dispatch: any) => {
    dispatch(logOutUser());
  };
};

const logOutUser = () => ({
  type: LOGIN_OUT,
});
