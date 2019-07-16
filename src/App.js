import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import NewPost from "./pages/new-post";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Profile from "pages/profile";
import Post from "pages/post";
import Navigation from "Components/navigation";
import { Footer } from "Components/footer";
import PrivateRoute from "Components/private-route";
import { store } from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Route exact path="/" component={Main} />
        <Route path="/page/:page?" component={Main} />
        <Route path="/post/:post?" component={Post} />
        <PrivateRoute path="/new-post" component={NewPost} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
