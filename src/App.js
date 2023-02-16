import './App.css';
import './mobile.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Footer from './components/Footer';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Work />
        <Skills />
        <Footer />
    </div>
  );
}

export default App;
