import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from '../components/Home';
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter ([
  {path : '/' , element : <Root></Root>, errorElement : <ErrorPage></ErrorPage>, children : [
    {path : '/' , element : <Home></Home>}
  ]}
])