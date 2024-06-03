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
                path: '/posts/:id',
                element: <PostDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`)
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
        ]
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
                path: 'my-post',
                element: <MyPosts/>
            },
            {
                path: 'upload-post',
                element: <UploadPost/>
            },
            {
                path: 'update-post/:id',
                element: <UpdatePost/>,
                loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`)
            },
        ]
    }
])

export default router;