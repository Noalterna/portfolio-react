import './App.css';
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x', (e.clientX+window.scrollX) + 'px');
    document.documentElement.style.setProperty('--y', (e.clientY+window.scrollY) + 'px');
  }
  return (
    <>
    <span id="cursor"></span>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
