import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "../layouts/Admin";
import Login from "../views/Login";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/login">
        {isLoggedIn ? <Redirect to="/admin/patients" /> : <Login />}
      </Route>
      {isLoggedIn ? (
        <Redirect to="/admin/patients" />
      ) : (
        <Redirect to="/login" />
      )}
    </Switch>
  );
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
