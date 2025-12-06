import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Projects"
import Skills from "./components/Skills"
export default function App(){
  return(
    <>
      <Navbar/>

      <div style={{marginTop:"90px"}}></div>
      <div style={{
        display:"flex",
        justifyContent:"center"
      }}>
        <Hero/>
      </div>
      <Skills/>
      <Project />
      <Contact/>
    </>
  )
}