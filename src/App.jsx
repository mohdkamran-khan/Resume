import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Hobby from './components/Hobby';

function App() {

  return (
    <div className="bg-slate-200 px-4 py-9">
      <div className='bg-white max-w-6xl mx-auto rounded-xl shadow-lg p-4'>
       <Header />
       <AboutMe />
       <Projects />
       <Skills />
       <Experience />
       <Education />
       <Hobby />
       <Contact />
       <hr />
       <Footer />
      </div>
    </div>
  )
}

export default App
