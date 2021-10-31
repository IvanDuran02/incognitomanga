import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SoloLeveling from './Pages/SoloLeveling';
import Footer from './Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Solo-Leveling' exact component={SoloLeveling} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
