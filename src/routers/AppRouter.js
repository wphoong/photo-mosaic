import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import LoginPage from "../components/LoginPage.js";
import DashboardPage from "../components/DashboardPage.js";
import AddPhotoPage from "../components/AddPhotoPage.js";
import EditPhotoPage from "../components/EditPhotoPage.js";
import HelpPage from "../components/HelpPage.js";
import NotFoundPage from "../components/NotFoundPage.js";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute.js";
import PublicRoute from "./PublicRoute.js";
export const history = createHistory();

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={DashboardPage} exact={true}/>
        <PrivateRoute path="/create" component={AddPhotoPage} exact={true}/>
        <PrivateRoute path="/edit/:id" component={EditPhotoPage} />
        <PublicRoute path="/help" component={HelpPage} />
        <PublicRoute component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

