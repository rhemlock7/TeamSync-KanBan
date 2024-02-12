import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
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
    } catch (error) {
      console.error('Login error:', error);
    }
    setFormState({ email: '', password: '' });
  };

  return (
    <section className="h-full flex flex-col items-center justify-center">
      <div className="text-center mb-10 text-3xl">
        <img
          className="mx-auto w-48"
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          alt="logo"
        />
        <h4 className="mt-4 text-xl font-semibold text-navy-900">We are Project 3 Team</h4>
      </div>

      <div className="bg-gray-100 rounded-md p-8 max-w-md w-full lg:w-2/3 text-gray-700">
        <h1 className="text-center text-lg font-semibold mb-6">Login</h1>

        {data ? (
          <p className="text-center text-navy-600">
            Success! You may now head{' '}
            <Link to="/" className="text-navy-600 hover:text-navy-500">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-lg font-large">Email address</label>
              <input
                id="email"
                value={formState.email}
                onChange={handleChange}
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-navy-500 focus:border-navy-500 sm:text-lg"
                required
              />
            </div>

            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="block text-lg font-large">Password</label>
                <Link to="/forgot-password" className="text-sm text-navy-600 hover:text-navy-500">Forgot password?</Link>
              </div>
              <input
                id="password"
                value={formState.password}
                onChange={handleChange}
                name="password"
                type="password"
                autoComplete="current-password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-grey-800 focus:border-navy-500 sm:text-lg"
                required
              />
            </div>

            <div>
              <button
                id="login-btn"
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
              >
                Sign in
              </button>
            </div>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-red-100 text-red-700">
            {error.message}
          </div>
        )}

        {/* Signup Section */}
        <p className="mt-4 text-center text-sm text-navy-500">
          Not a member? <Link to="/signup" className="font-semibold leading-6 text-grey-600 hover:text-navy-500">Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
