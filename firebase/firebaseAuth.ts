import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

export const firebaseGetUser = async (email: string, password: string) => {
  try {
    let credential = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    return credential;
  } catch (error) {
    throw error;
  }
};

export const firebaseAddNewUser = async (email: string, password: string) => {
  try {
    const credential = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    return credential;
  } catch (error) {
    throw error;
  }
};
