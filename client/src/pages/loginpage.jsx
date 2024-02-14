import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...formState } });
      Auth.login(data.login.token);
      window.location.href = "/Home";

    } catch (error) {
      console.error("Login error:", error);

    }
    
    setFormState({ email: "", password: "" });
  };

  return (
    <section className=" flex flex-col items-center justify-center">
      <div className="text-center  text-3xl">
      <img  src="src/assets/logoo.png" alt="TeamSync logo" width="200" height="200" />
      </div>

      <div className="cards mb-40 login-card rounded-lg p-10 max-w-3xl w-full lg:w-4/4 text-gray-700 shadow-xl">
        <h2 className="text-center text-white text-lg font-bold mb-6">Login</h2>

        {data ? (
          <p className="text-center text-gray-600">
            Success! You may now head{" "}
            <Link to="/Home" className="text-white">
              back to the homepage.
            </Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-lg text-white font-medium"
              >
                Email address
              </label>
              <input
                id="email"
                value={formState.email}
                onChange={handleChange}
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-lg text-white font-medium"
              >
                Password
              </label>
              <input
                id="password"
                value={formState.password}
                onChange={handleChange}
                name="password"
                type="password"
                autoComplete="current-password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                required
              />
            </div>

            <div>
              <button id="login-btn" type="submit"
              className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-gray-900 hover:bg-gray-300 hover:text-black ocus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <Link to="/Home">
                  Sign in
                </Link>
              </button>
            </div>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-red-100 text-red-700">
            {error.message}
          </div>
        )}

        <p className="mt-4 text-center text-lg text-white">
          Not a member?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-gray-200 hover:text-white"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
