import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Intro /> */}
      <About />
      {/* Projects will go here, under the about section */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
