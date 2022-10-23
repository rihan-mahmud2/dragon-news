import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import Category from "../Shared/Category/Category";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://dragon-news-server-phi-lovat.vercel.app/news"),
      },
      {
        path: `category/:id`,
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-phi-lovat.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://dragon-news-server-phi-lovat.vercel.app/news/${params.id}`
          );
        },
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
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
