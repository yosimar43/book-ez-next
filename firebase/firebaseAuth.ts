import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export const firebaseGetUser = async (email: string, password: string) => {
  try {
    let credential = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    return credential;
  } catch (error) {
    return null;
  }
};
