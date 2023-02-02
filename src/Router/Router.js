import { createBrowserRouter } from "react-router-dom";
import AddCatagory from "../DashboardPage/AddCatagory/AddCatagory";
import AddProduct from "../DashboardPage/AddProduct/AddProduct";
import Catagory from "../DashboardPage/Catagory/Catagory";
import Coustomers from "../DashboardPage/Customers/Coustomers";
import DashboardHome from "../DashboardPage/DashboardHome/DashboardHome";
import Product from "../DashboardPage/Product/Product";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import OrderProcess from "../Layout/OrderProcess";
import OrderDelivered from "../Order/OrderDelivered/OrderDelivered";
import OrderPeending from "../Order/OrderPeending/OrderPeending";
import OrderPocessing from "../Order/OrderPocessing/OrderPocessing";
import TotalOrder from "../Order/TotalOrder/TotalOrder";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrder from "../Pages/MyOrder/MyOrder";
import OrderComplete from "../Pages/OrderComplete/OrderComplete";
import Register from "../Pages/Register/Register";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import WishList from "../Pages/WishList/WishList";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/view_details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const data = await fetch(
            `http://localhost:5000/view_details/${params.id}`
          );
          return data;
        },
      },
      {
        path: "/shopping_cart",
        element: <ShoppingCart></ShoppingCart>,
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>,
      },
      {
        path: "/check_out",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/order_complite",
        element: <OrderComplete></OrderComplete>,
      },
      {
        path: "/my_order",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/contact_me",
        element: <ContactMe></ContactMe>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/product",
        element: <Product></Product>,
      },
      {
        path: "/dashboard/add_product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/catagory",
        element: <Catagory></Catagory>,
      },
      {
        path: "/dashboard/add_catagory",
        element: <AddCatagory></AddCatagory>,
      },
      {
        path: "/dashboard/customers",
        element: <Coustomers></Coustomers>,
      },
    ],
  },

  {
    path: "/dashboard/order",
    element: <OrderProcess></OrderProcess>,
    children: [
      {
        path: "/dashboard/order",
        element: <TotalOrder></TotalOrder>,
      },
      {
        path: "/dashboard/order/order_peending",
        element: <OrderPeending></OrderPeending>,
      },
      {
        path: "/dashboard/order/order_processing",
        element: <OrderPocessing></OrderPocessing>,
      },
      {
        path: "/dashboard/order/order_delivered",
        element: <OrderDelivered></OrderDelivered>,
      },
    ],
  },
]);
