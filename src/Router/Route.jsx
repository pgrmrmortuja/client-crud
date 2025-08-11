import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomeLayout from "../layout/HomeLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllUsers from "../pages/AllUsers";
import Details from "../pages/Details";
import Update from "../pages/Update";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, Component: HomeLayout },
            { path: "register", Component: Register },
            { path: "login", Component: Login },
            { path: "users", Component: AllUsers },
            { path: "details", Component: Details },
            { path: "update", Component: Update },
            
        ]
    },
])

