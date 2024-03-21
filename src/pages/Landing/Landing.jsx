//specific components//
import Hero from "../../Components/LandingPageComponents/Hero"
import Features from "../../Components/LandingPageComponents/Features"
import FAQ from "../../Components/LandingPageComponents/FAQ/FAQ";
import Header from "../../Components/GeneralComponents/Header";

const Landing = () => {
   return (
      <div id="landing">
         <Header />
         <Hero />
         <Features />
         <FAQ />
      </div>
   )
}
export default Landing;