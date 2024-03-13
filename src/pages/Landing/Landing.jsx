//Landing.jsx

// git add . && git commit -m "message" && git push

//css//
import './Landing.css'

//global components//
import Header from "../../Components/GeneralComponents/Header/Header.jsx"
import Footer from "../../Components/GeneralComponents/Footer/Footer.jsx"

//specific components//
import LandingPlaceHolder from "../../Components/LandingPageCoponents/Hero.jsx"
import Features from "../../Components/LandingPageCoponents/Features.jsx"

const Landing = () => {
   return (
      <>
         <Header />
         <LandingPlaceHolder />
         <Features />
         <Footer />
      </>
   )
}
export default Landing;
