//Landing.jsx

// git add . && git commit -m "message" && git push

//css//
import './Landing.css'

//global components//
import Header from "../../Components/GeneralComponents/Header/Header.jsx"
import Footer from "../../Components/GeneralComponents/Footer/Footer.jsx"

//specific components//
import LandingPlaceHolder from "../../Components/LandingPageCoponents/PlaceHolder.jsx"

const Landing = () => {
   return (
      <>
         <Header />
         <div>Landing</div>
         <LandingPlaceHolder />
         <Footer />
      </>
   )
}
export default Landing;
