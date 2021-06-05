import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import Error from "./Pages/Error/Error.js";
import How from "./Pages/How_It_Works/How_It_Works.js";
import ScrollToTop from "./Components/ScrollToTop.js";

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
        </Route>
        <Route exact path="/How-It-Works">
          <How />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
