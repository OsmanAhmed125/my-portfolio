import './App.css';
import './mobile.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Work />
        <Footer />
    </div>
  );
}

export default App;
