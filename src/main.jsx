import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './component/Main/Main.jsx';
import Home from './component/Home/Home.jsx';
import AppliedJobs from './component/AppliedJobs/AppliedJobs.jsx';
import Blog from './component/Blog/Blog.jsx';
import JobDetail from './component/JobDetail/JobDetail.jsx';

const router = createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element:<Home></Home>,
    },
    {
      path:'/appliedjobs',
      loader: () => fetch('jobs.json'),
      element:<AppliedJobs></AppliedJobs>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },
    {
      path:'/job/:Id',
      loader: () => fetch('jobs.json'),
      element:<JobDetail></JobDetail>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
