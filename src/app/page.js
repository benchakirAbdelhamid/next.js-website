import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/Home"
import CardPage from "./pages/CardPage"
import './styles/style.css'
import Destination from "./pages/Destination"
import Section from "./pages/Section"
import Footer from "./pages/footer"
import Featured from "./pages/Featured"
import Card from "./pages/Card"

export default function Home() {
  return (
 <div>

  <Navbar/>
  <HomePage/>
  <CardPage/>
  <Destination/>
  <Section/>
  <Featured/>
  <Section/>
  <Card/>
  <Section/>
  <Footer/>
    
 </div>
  )
}
