import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Error from './components/error/Error.js'
import About from './components/about/About.js'
import Product from './components/product/Product.js'
import Shop from './components/locations/Shop.js'
import Footer from './components/footer/Footer.js'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'product',
    element: <Product />
  },
  {
    path: 'shop',
    element: <Shop />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
