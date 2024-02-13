import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom/dist";
import "./index.css";

import App from './App.jsx'
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/loginpage.jsx';
import Signup from './pages/signup.jsx';
import About from './pages/about.jsx';
import Landing from './pages/landingpage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <ProfileSetting />,
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/LandingPage',
        element: <Landing />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
