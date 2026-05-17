import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlight"
import Navbar from "./components/Navbar"
import Performance from "./components/Performance"
import ProductViewer from "./components/ProductViewer"
import Showcase from "./components/Showcase"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <ProductViewer/>
    <Showcase/>
    <Performance/>
    {/* Features */}
    <Highlights/>
    <Footer/>
    </>
  )
}

export default App