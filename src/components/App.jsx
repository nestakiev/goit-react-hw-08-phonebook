import React, { lazy, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { authAPI } from "redux/authAPI";
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoute } from "components/PrivateRoute";
import { PublicRoute } from "components/PublicRoute";
import { LoadingPageView } from "Views/LoadingPageView";

const HomeView = lazy(() => import("../Views/HomeView"));
const ContactsView = lazy(() => import("../Views/ContactsView"));
const RegisterView = lazy(() => import("../Views/RegisterView"));
const LoginView = lazy(() => import("../Views/LoginView"));

export const App = () => {
  const dispath = useDispatch();
  const isRefreshUser = useSelector(state => state.auth.isRefreshUser);

  useEffect(() => {
    dispath(authAPI.fetchCurrentUser())
  }, [dispath]);

  return (
  <>
    <Routes>
      <Route path='/' element={isRefreshUser ? <LoadingPageView/> : <Layout/>}>
        <Route index element={<PublicRoute><HomeView/></PublicRoute>}/>
        <Route path="register" element={<PublicRoute restricted><RegisterView/></PublicRoute>}/>
        <Route path="login" element={<PublicRoute restricted><LoginView/></PublicRoute>}/>
        <Route path="contacts" element={<PrivateRoute><ContactsView/></PrivateRoute>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
  </>);
};
