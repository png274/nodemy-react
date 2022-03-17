import { Navigate } from 'react-router-dom';
import Login from "../views/Login";
import Home from "../views/Home";
import Page from "../views/Page";
import About from "../views/About";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("authToken");
  console.log(token);
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return children;
}

const routeConfig = [
  {
    component: <Login />,
    path: "/login",
    label: "Login",
  },
  {
    component: <PrivateRoute><Home /></PrivateRoute>,
    path: "/home",
    label: "Home",
  },
  {
    component: <PrivateRoute><Page /></PrivateRoute>,
    path: "/page",
    label: "Page",
  },
  {
    component: <PrivateRoute><About /></PrivateRoute>,
    path: "/about",
    label: "About",
  },
];

export default routeConfig;