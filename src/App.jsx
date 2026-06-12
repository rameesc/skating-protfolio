import About from "./components/About"
import Achievements from "./components/Achievement"
import CoachingServices from "./components/CoachingServices"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import { Hero } from "./components/Hero"
import Skills from "./components/Skills"
import Videos from "./components/Videos"


function App() {
  
 return(

  <div>
   
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Gallery />
      <Videos />
      
      <CoachingServices />
      <Contact />

  </div>

 ) 
}

export default App
