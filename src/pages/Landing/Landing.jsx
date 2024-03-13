//global components//
import Header from "../../Components/GeneralComponents/Header"
import Footer from "../../Components/GeneralComponents/Footer"

//specific components//
import Hero from "../../Components/LandingPageCoponents/Hero"
import Features from "../../Components/LandingPageCoponents/Features"

import './Landing.css'
import FAQ from "../../Components/LandingPageCoponents/FAQ/FAQ";

const Landing = () => {
   return (
      <div id="landing">
         <Header />
         <Hero />
         <Features />
         <FAQ />
         <Footer />
      </div>
   )
}
export default Landing;