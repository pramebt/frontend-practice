import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nopage from "./pages/Nopage";
import Layout from "./pages/Layout";
import Aboutpage from "./pages/Aboutpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>
  },
  {
    path: "/about-us",
    element: <Aboutpage/>
  },
  {
    path:"*",element:<Nopage/>
  }
])
const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
