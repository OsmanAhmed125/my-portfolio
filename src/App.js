import './App.css';
import './mobile.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes} from 'react-router';


Aos.init()

function App() {
  return (
    <div className="App">




<Navbar />
<Routes>
  
       <Route path='/' element={<Home />}/>
      <Route path='/Work' element= {<Work/>}/>
      
        <Skills />
    </Routes>
        <Footer />
       
    </div>
  );
}

export default App;
