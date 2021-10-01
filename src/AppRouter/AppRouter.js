import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route path="/product/:id" component={ProductItem} />
            <Route path="*" component={() => <h2>404 Page Not Found</h2>} />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
