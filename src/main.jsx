
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Account from "./components/Account";
import More from "./components/More";
import Cart from "./components/Cart";
import Error from "./components/Error";
import AllProducts from "./components/Products/AllProducts";
import Register from "./components/Login/Register";
import { AppProvider } from "./context/ProductContext";
import SingleProduct from "./components/Products/SingleProduct";
import { FilterContextProvider } from "./context/FilterContex";
import { CartProvider } from "./context/CartContext";
import Login001 from "./components/Login/Login001";
import Login from "./components/Login/Login.jsx";
import Register01 from "./components/Login/Register01.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register01/>,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/more",
        element: <More />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/singleproduct/:id",
        element: <SingleProduct />,
      },
     
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <RouterProvider router={appRouter} />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);
