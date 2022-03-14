
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import Projects from './Component/Projects';
import Services from './Component/Services';
import Skills from './Component/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
     
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      

    </div>
  );
}

export default App;
