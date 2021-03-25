
import './styles/App.css';
import Navbar from "./views/Nav.jsx";
import Main from "./views/Main.js";
import Contact from "./views/Contact.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
     <Router>
      <Navbar/>
      
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
