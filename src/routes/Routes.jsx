import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import UploadPost from "../pages/Dashboard/UploadPost";
import MyPosts from "../pages/Dashboard/MyPosts";
import UpdatePost from "../pages/Dashboard/UpdatePost";
import PostDetails from "../pages/PostDetails";
import Posts from "../pages/Posts";
import UpdateUserInfo from "../pages/Dashboard/UpdateUserInfo";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import ForgetPass from "../pages/Authentication/ForgetPass";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'posts',
                element: <Posts/>
            },
            {
                path: '/posts/:id',
                element: <PrivateRoute><PostDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`, {
                    headers: {
                      authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                  })
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'blogs',
                element: <Blogs/>
            },
            {
                path: 'forget-pass',
                element: <ForgetPass/>
            },
        ],
        
        errorElement: <ErrorPage/>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/dashboard/my-post',
                element: <MyPosts/>
            },
            {
                path: '/dashboard/upload-post',
                element: <UploadPost/>
            },
            {
                path: '/dashboard/update-post/:id',
                element: <UpdatePost/>,
                loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`, {
                    headers: {
                      authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                  })
            },
            {
                path: '/dashboard/profile/update/:id',
                element: <UpdateUserInfo/>,
                loader: ({params}) => fetch(`http://localhost:5000/user/profile/${params.id}`, {
                    headers: {
                      authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                  })
            },
        ]
    }
])


export default router;