import {
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import { router } from "./Router/Route";
import './index.css';
import AuthProvider from "./providers/AuthProvider";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>


);