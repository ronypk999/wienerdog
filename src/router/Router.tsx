import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);
