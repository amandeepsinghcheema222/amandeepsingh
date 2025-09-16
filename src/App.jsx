import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards'; // 1. Import Awards
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Publications />
      <Education />
      <Skills />
      <Awards /> {/* 2. Use Awards */}
      <Footer />
    </div>
  )
}

export default App