//global components//
import Header from "../../Components/GeneralComponents/Header"
import Footer from "../../Components/GeneralComponents/Footer"

//specific components//
import Hero from "../../Components/LandingPageComponents/Hero"
import Features from "../../Components/LandingPageComponents/Features"
import FAQ from "../../Components/LandingPageComponents/FAQ/FAQ";



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