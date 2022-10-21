import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Category from "../Shared/Category/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: `category/:id`,
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "news/:id",
        element: <News></News>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/news/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
