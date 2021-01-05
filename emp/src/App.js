import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from './Component/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
