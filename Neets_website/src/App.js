import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Orange from "./pages/sub_pages/Orange";
import Blueberry from "./pages/sub_pages/Blueberry";
import Dragonfruit from "./pages/sub_pages/Dragonfruit";
import Cart from "./pages/Cart";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/orange">
            <Orange />
          </Route>
          <Route exact path="/blueberry">
            <Blueberry />
          </Route>
          <Route exact path="/dragonfruit">
            <Dragonfruit />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
