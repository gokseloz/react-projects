import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import {
  Payment,
  Terminal,
  Connect,
  About,
  Billing,
  Customers,
  Help,
  Libraries,
  Plugins,
} from "./Pages/index";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/payment" component={Payment} />
          <Route path="/terminal" component={Terminal} />
          <Route path="/connect" component={Connect} />
          <Route path="/about" component={About} />
          <Route path="/billing" component={Billing} />
          <Route path="/customers" component={Customers} />
          <Route path="/help" component={Help} />
          <Route path="/libraries" component={Libraries} />
          <Route path="/plugins" component={Plugins} />
          <Route path="/" component={Hero} />
        </Switch>
        <Submenu />
      </BrowserRouter>
    </>
  );
}

export default App;
