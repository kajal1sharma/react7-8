import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Routes,Route,Link} from "react-router-dom"
import About from './About';
import Home from "./Home";
import Contact from './Contact';
import Products from './Products';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
          <li><Link to="/" > Home </Link></li>
          <li><Link to="/about"> About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Product">Product</Link></li>
          <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/Product" element={<Products/>}></Route>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
