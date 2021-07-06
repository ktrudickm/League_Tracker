import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../../utils/context";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAppContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
