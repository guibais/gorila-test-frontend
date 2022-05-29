import React from "react";
import { Navigate } from "react-router-dom";

type IUnGuardedRoute = {
  auth: boolean;
  children: React.ReactNode;
};
function UnGuardedRoute(props: IUnGuardedRoute) {
  if (props.auth) {
    return <Navigate to="/" replace />;
  }
  return <>{props.children}</>;
}

export default UnGuardedRoute;
