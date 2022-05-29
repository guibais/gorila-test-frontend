import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import GuardedRoute from "./shared/components/guardedRoute";
import { LocalPersistence } from "./shared/localPersistence";
import UnGuardedRoute from "./shared/components/unguardedRoute";
import Register from "./components/pages/register";
import { Header } from "./shared/components/header";
import GorilaLogo from "./assets/images/LogoGorila.svg";
import { LocalService } from "./services/local.service";
import React from "react";

function App() {
  const localService = new LocalService();

  const logout = () => {
    localService.logout();
    window.location.href = "/";
  };

  const isAuthenticated = () => {
    const token = LocalPersistence.getItem("token");
    if (!token) return false;
    const userToken: any = jwt_decode(token ?? "");
    const expires = userToken.exp;
    const timeNow = new Date().getTime() / 1000;
    const invalid = expires < timeNow;
    if (invalid) {
      LocalPersistence.removeItem("token");
      return false;
    }
    return true;
  };

  return (
    <div className="App">
      {localService.isAuthenticated() ? (
        <Header
          image={GorilaLogo}
          alt="Gorila Logo"
          actionButton={{
            children: "Sair",
            onClick: () => {
              logout();
            },
          }}
        />
      ) : null}
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/home"
          element={
            <GuardedRoute auth={isAuthenticated()}>
              <Home />
            </GuardedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <UnGuardedRoute auth={isAuthenticated()}>
              <Login />
            </UnGuardedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <UnGuardedRoute auth={isAuthenticated()}>
              <Register />
            </UnGuardedRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
