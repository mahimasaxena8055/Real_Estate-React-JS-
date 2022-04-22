import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./components/Main";
import Login from "./components/Login";
import Logout from "./components/Logout";
import UserAfterLogin from "./components/UserAfterLogin";
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import DispProp from "./components/DispProp";
import About from "./components/About";
import Contact from "./components/Contact";
import Add from "./components/Add";
import Delete from "./components/Delete";
import Error from "./components/Error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Properties from "./components/Properties";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/userafterlogin" component={UserAfterLogin} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dispprop" component={DispProp} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/adminlogin" component={AdminLogin} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/delete" component={Delete} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
