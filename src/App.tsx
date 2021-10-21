import { useState } from 'react';
import './App.css';
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

function App() {
  document.body.onmousemove = function (e) {
    document.documentElement.style.setProperty('--x', (e.clientX + window.scrollX) + 'px');
    document.documentElement.style.setProperty('--y', (e.clientY + window.scrollY) + 'px');
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <span id="cursor"></span>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
