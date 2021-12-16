import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "../layouts/Admin";
import Login from "../views/Login";

const AppRouter = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Redirect to="/admin/patients" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  }
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
