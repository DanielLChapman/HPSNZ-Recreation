import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Journal from './Journal';
import NotFound from "./NotFound";

const Router = () => (
	  <BrowserRouter>
	    <Switch>
	      <Route exact path="/" component={App} />
	      <Route exact path="/:paramters" component={App} />
	      <Route exact path="/journal-entries/:paramters" component={Journal} />
	      <Route component={NotFound} />
	    </Switch>
	  </BrowserRouter>
);

export default Router;