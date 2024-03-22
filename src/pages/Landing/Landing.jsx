import { auth } from "../../firebase/init";
import { onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//specific components//
import Hero from "../../Components/LandingPageComponents/Hero"
import Features from "../../Components/LandingPageComponents/Features"
import FAQ from "../../Components/LandingPageComponents/FAQ/FAQ";
import Header from "../../Components/GeneralComponents/Header";

const Landing = () => {
   //  Other hooks
   const navigate = useNavigate();

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user && !user.emailVerified) {
            navigate("/login");
         } else if (user && user.emailVerified) {
            navigate("/dash");
         } else {
            navigate("/");
         }
      });
   }, [])

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