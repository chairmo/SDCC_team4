import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import Home from './components/views/Home';
import About from './components/views/About';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/deploy" component={DeployScreen} />
            <Route path="/app/insurancecompany" component={InsuranceCompany} />
            <Route path="/app/subscriber" component={Subscriber} /> */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
