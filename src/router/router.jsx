import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from '../components/Home';
import ErrorPage from "../components/ErrorPage";
import Statistics from '../components/Statistics';


export const router = createBrowserRouter ([
  {path : '/' , element : <Root></Root>, errorElement : <ErrorPage></ErrorPage>, children : [
    {path : '/' , 
    loader : async () => fetch('https://openapi.programming-hero.com/api/quiz'),
     element : <Home></Home>},
    {path : '/statistics' , 
    loader : async () => fetch('https://openapi.programming-hero.com/api/quiz'),
     element : <Statistics></Statistics>}
  ]}
])