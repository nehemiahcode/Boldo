import * as React from "react";
import * as ReactDOM from "react-dom/client";
import AllPage from "./AllPage";
import LogIn from "./Loginpage";
import SignInForm from "./SignupPage";
import ValuePage from "./Values";
import TeamPage from "./Team";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/home",
    element: <AllPage />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignInForm />,
  },
  {
    path: "/values",
    element: <ValuePage />,
  },
  {
    path: "/teams",
    element: <TeamPage />,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
