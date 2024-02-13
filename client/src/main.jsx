import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom/dist";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ProfileSetting from "./components/ProfileSetings.jsx";
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
