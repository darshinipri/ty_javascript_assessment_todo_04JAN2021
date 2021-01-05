import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";
import CreateAccount from "../Employee/CreateAccount";
import ShowAccount from "../Employee/ShowAccount";
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../Home/img2.webp';
import img3 from '../Home/img3.jpg';
import img4 from '../Home/img4.jpg';
import './home.css';
const Home = () => (
  <div className="block">
      <div>
   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">Employee</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/CreateAccount">Create Account</Nav.Link>
      <Nav.Link href="/ShowAccount">Show Account</Nav.Link>
    </Nav>
    
  </Navbar>
  
 </div>

  <div>
    <Router>
      <Route  exact path="/CreateAccount" component={CreateAccount}></Route>
      <Route  exact path="/ShowAccount" component={ShowAccount}></Route>
    </Router>
    </div>
  
   
     
 </div>
   
);

export default Home;