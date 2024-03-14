import React, { useState, useEffect } from 'react';
import './AboutContact.css'
import ContactUsForm from './components/ContactUsForm/ContactUsForm';
import CreatorCard from './components/CreatorCard/CreatorCard';
import RotatingSphere from './components/RotatingSphere/RotatingSphere';
import Header from '../../Components/GeneralComponents/Header';
import Footer from '../../Components/GeneralComponents/Footer';

const creatorsdata = 
      [
         {
            "id": 1,
            "showSkills": false,
            "name": "Sebastian",
            "img": "src/assets/images/seb_profile_pic.png",
            "desc": "Full Stack Developer",
            "github": "https://github.com/SebZG",
            "linkedin": "https://www.linkedin.com/in/sebastian-z-g/",
            "email": "pCZ8x@example.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React","Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         },
         {
            "id": 2,
            "showSkills": false,
            "name": "Ana",
            "img": "src/assets/images/ana_profile_pic.png",
            "desc": "Front End Developer",
            "github": "https://github.com/anadomuta",
            "linkedin": "https://www.linkedin.com/in/ana-domuta/",
            "email": "pCZ8x@example.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React", "Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         },
         {
            "id": 3,
            "showSkills": false,
            "name": "Harry",
            "img": "src/assets/images/harry_profile_pic.png",
            "desc": "Front End Developer",
            "github": "https://github.com/hpro97",
            "linkedin": "https://www.linkedin.com/in/harryprobert/",
            "email": "pCZ8x@example.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React", "Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         },
         {
            "id": 4,
            "showSkills": false,
            "name": "Aaron",
            "img": "src/assets/images/aaron_profile_pic.png",
            "desc": "Front End Developer",
            "github": "https://github.com/aaron1490",
            "linkedin": "https://www.linkedin.com/in/aaron-armstrong-%E8%89%BE%E4%BF%8A%E6%A8%82-80986ba5/",
            "email": "pCZ8x@example.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React", "Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         },
         {
            "id": 5,
            "showSkills": false,
            "name": "Conor",
            "img": "src/assets/images/conner_profile_pic.png",
            "desc": "Front End Developer",
            "github": "https://github.com/Crar96",
            "linkedin": "https://www.linkedin.com/in/conor-grogan-a09a7a216/",
            "email": "pCZ8x@example.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React", "Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         },
         {
            "id": 6,
            "showSkills": false,
            "name": "Tommy Boi",
            "img": "src/assets/images/tom_profile_pic.png",
            "desc": "Full Stack Developer",
            "github": "https://github.com/DrWho1369",
            "linkedin": "https://www.linkedin.com/in/thomas-baker-anutr-0b9758222/",
            "email": "tbaker.bhb@gmail.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React", "Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         }
   ]

const AboutContact = () => {
   const [creators, setCreators] = useState(creatorsdata);
   const setShowSkills = (id) => {
      const currentCreator = creators.find(creator => creator.id === id)
      const creatorIndex = creators.indexOf(currentCreator);
      const newCreators = [...creators];
      newCreators[creatorIndex].showSkills = !currentCreator.showSkills;
      setCreators(newCreators);
   }
   return (
      <>
         <Header />
         <div className='row'>
            <h1>The Creators</h1>
         </div>
         <div className="row">
            {creators.map(creator => (
               <div key={creator.id} className="col-md-4">
                  <CreatorCard setShowSkills={setShowSkills} id={creator.id} showSkills={creator.showSkills} img={creator.img} name={creator.name} desc={creator.desc} github={creator.github} linkedin={creator.linkedin} email={creator.email} skills={creator.skills} />
               </div>  
               
            ))}
         </div>
         
         <Footer />
      </>
   )
}
export default AboutContact;