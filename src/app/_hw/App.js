import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auth from "../auth/Auth";
import Workers from "../workers/Workers";
import Worker from "../workers/worker/Worker";
import Root from "../App.js";
import Box from '@mui/material/Box';

function App() {
  return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/workers">
              <Workers />
            </Route>
            <Route path="/worker">
              <Worker />
            </Route>
            <Route path="/root">
              <Root />
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
