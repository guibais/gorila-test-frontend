import React from "react";
import { Navigate } from "react-router-dom";

type IGuardedRoute = {
  auth: boolean;
  children: React.ReactNode;
};
function GuardedRoute(props: IGuardedRoute) {
  if (!props.auth) {
    return <Navigate to="/login" replace />;
  }
  return <>{props.children}</>;
}

export default GuardedRoute;
