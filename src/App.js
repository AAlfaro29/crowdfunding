import React from "react";
import { BrowserRouter as Router, Switch, Route }  from"react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProjectPage from "./pages/ProjectPage";
import CreateProjectPage from "./pages/CreateProjectPage";


function App() {
  return (
      <Router>
      <div>
      <Nav />
      
      <Switch>
            <Route path="/project/:id">
            <ProjectPage />
            </Route>
            <Route path="/login">
            <LoginPage />
            </Route>
            <Route path="/createprojectpage">
            <CreateProjectPage />
            </Route>
            <Route path="/">
            <HomePage />
            </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;