import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Principal from "./components/Principal";
import "./scss/styles.scss";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Principal} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
