import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Route, Switch,Link } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/dashboard"
import SubDashboard from "./pages/SubDashboard";

function App() {
  return (
    <Container fluid>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand><Link to="/" style={{textDecoration:"none",color:"black"}}>Hello Dog!</Link></Navbar.Brand>
        </Container>
      </Navbar>
      
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/:dog">
          <SubDashboard />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
