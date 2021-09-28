import { useRouter } from "next/dist/client/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authUserAction } from "../actions/authActions";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";

const formDefaultData: {
  email: string;
  password: string;
} = {
  email: "",
  password: "",
};

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const authUser = (user: object) => dispatch(authUserAction(user));

  const [userLocalStorage, setUser] = useLocalStorage<string>("user", "null");

  const user = useSelector((state) => state.auth.getUserCredentials);
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(userLocalStorage)) {
      router.push("/");
    }

    setUser(JSON.stringify(user));
  }, [user]);

  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!data.email.trim() || !data.password.trim()) {
      alert("Todos los campos se deben llenar");
      return;
    }

    authUser(data);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-700 bg-gradient-to-tr from-red-400 via-blue-300 to-blue-600">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
          action=""
        >
          <label className="font-semibold text-xs" htmlFor="usernameField">
            Usuario o Email
          </label>
          <input
            {...register("email")}
            id="usernameField"
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text"
          />
          <label className="font-semibold text-xs mt-3" htmlFor="contraseña">
            Password
          </label>
          <input
            {...register("password")}
            id="contraseña"
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="password"
          />
          <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
            Login
          </button>
          <div className="flex mt-6 justify-center text-xs">
            <a className="text-blue-400 hover:text-blue-500" href="#">
              Forgot Password
            </a>
            <span className="mx-2 text-gray-300">/</span>
            <a className="text-blue-400 hover:text-blue-500" href="register">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
