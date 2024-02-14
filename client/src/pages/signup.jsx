import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      window.location.href = "/Home";

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-center mb-10 text-3xl">
      <img  src="src/assets/logoo.png" alt="TeamSync logo" width="200" height="200" />
      </div>

      <div className="cards login-card mb-20 rounded-lg p-10 max-w-3xl w-full lg:w-4/4 text-gray-700 shadow-xl">
        <h2 className="text-center text-white text-lg font-bold mb-6">Sign Up</h2>

        {data ? (
          <p className="text-center text-gray-600">
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-lg text-white font-medium">Username</label>
              <input
                id="username"
                value={formState.username}
                onChange={handleChange}
                name="username"
                type="text"
                autoComplete="username"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-white font-medium">Email address</label>
              <input
                id="email"
                value={formState.email}
                onChange={handleChange}
                name="email"
                type="email"
                autoComplete="email"
                className="mt-5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg text-white  font-medium">Password</label>
              <input
                id="password"
                value={formState.password}
                onChange={handleChange}
                name="password"
                type="password"
                autoComplete="new-password"
                className="mt-5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-lg text-white  font-medium">Confirm Password</label>
              <input
                id="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                className="mt-5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-gray-900 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Sign up
              </button>
            </div>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-red-100 text-red-700">
            {error.message}
          </div>
        )}

      
        <p className="mt-4 text-center text-lg text-white ">
          Already a member? <Link to="/login" className="font-bold leading-6 text-gray-300 hover:text-white">Log in</Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
