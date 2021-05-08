import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Accordion from "./Components/Accordion/Accordion";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
          <Accordion />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
