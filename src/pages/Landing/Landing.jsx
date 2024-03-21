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
         <br /><br /><br />
         <Features />
         <br /><br /><br /><br /><br /><br />
         <FAQ />
         <br /><br /><br /><br /><br /><br />
      </div>
   )
}
export default Landing;