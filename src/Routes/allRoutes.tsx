import { Navigate } from "react-router-dom";

// Authentication
import Fourzerofour from "pages/AuthenticationInner/Errors/404Error";
import Fivezerozero from "pages/AuthenticationInner/Errors/500Error";
import Fivezerothree from "pages/AuthenticationInner/Errors/503Error";
import OfflinePage from "pages/AuthenticationInner/Errors/Offline";


import Ecommerce from "pages/Dashboard/Ecommerce";

// Authentication
import Login from "pages/Authentication/Login";
import Logout from "pages/Authentication/Logout";
import Register from "pages/Authentication/Register";
import ForgotPassword from "pages/Authentication/ForgotPassword";
import UserProfile from "pages/Authentication/user-profile";

const authProtectedRoutes = [
    // Dashboard
    { path: "/dashboard", component: <Ecommerce /> },
    { path: "/", exact: true ,component: <Navigate to="/dashboard" /> },
    { path: "*", component: <Navigate to="/dashboard" /> },

    //user prpfile
    { path: "/user-profile", name : "UserProfile" ,component: <UserProfile /> },
    // this route should be at the end of all other routes
    // eslint-disable-next-line react/display-name
    { path: "/", exact: true, name : "Navigate" ,component: <Navigate to="/dashboard" /> },

];

const publicRoutes = [
    // Authentication
    { path: "/login", name : "Login" ,component: <Login /> },
    { path: "/logout", name : "Logout" ,component: <Logout /> },
    { path: "/register", name : "Register" ,component: <Register /> },
    { path: "/forgot-password", name : "ForgotPassword" ,component: <ForgotPassword /> },


    // Error
    // Error 404
    { path: "/auth-404", name : "Fourzerofour" ,component: <Fourzerofour /> },

    // Error 500
    { path: "/auth-500", name : "Fivezerozero" ,component: <Fivezerozero /> },

    // Error 503
    { path: "/auth-503", name : "Fivezerothree" ,component: <Fivezerothree /> },

    // Offline Page
    { path: "/auth-offline", name : "OfflinePage" ,component: <OfflinePage /> },

];

export { authProtectedRoutes, publicRoutes };