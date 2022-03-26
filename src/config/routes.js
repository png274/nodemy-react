import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import Login from "../views/Login";
import Home from "../views/Home";
import Page from "../views/Page";
import About from "../views/About";
import { useSelector, useDispatch } from 'react-redux';

import action from "../redux/action";

function PrivateRoute({ children }) {
  const userSelector = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log(location);
    if (token && !userSelector.token) {
      dispatch(action.loginAction(token));
      navigate(location);
      return;
    }
  }, [dispatch, userSelector.token, location, navigate]);

  if (!userSelector.token) {
    return <Navigate to={"/login"} />;
  }

  return children;
}

// GET: /me

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