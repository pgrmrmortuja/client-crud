import {
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import { router } from "./Router/Route";
import './index.css';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);