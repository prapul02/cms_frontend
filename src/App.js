import React from "react";
import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import Login from "./pages/LoginPage"
import Logout from "./pages/Logout"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/"><Login/></Route>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/logout"><Logout /></Route>
        <Route path="/add-post"><AddPost /></Route>
      </Switch>
    </div>
  );
}

export default App;
