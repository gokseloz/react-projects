import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Projects from "./Pages/Projects";
import Calendar from "./Pages/Calendar";
import Documents from "./Pages/Documents";
import { Route } from "react-router-dom";
function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/documents" component={Documents} />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
