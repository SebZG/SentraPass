//specific components//
import Hero from "../../Components/LandingPageComponents/Hero"
import Features from "../../Components/LandingPageComponents/Features"
import FAQ from "../../Components/LandingPageComponents/FAQ/FAQ";

const Landing = () => {
   return (
      <div id="landing">
         <Hero />
         <Features />
         <FAQ />
      </div>
   )
}
export default Landing;