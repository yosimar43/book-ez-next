import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../store";
import firebaseApp from "../firebase/firebaseApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  firebaseApp();
  return (
    <Provider store={store}>
      <ToastContainer limit={1} />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
